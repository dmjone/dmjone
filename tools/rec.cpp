#include "opencv2/opencv.hpp"
#include <ctime>
#include <sstream>
#include <string>
#include <iostream>

using namespace cv;
using namespace std;

int main(int argc, char **argv)
{
    int key = 0;
    namedWindow("Screen Capture", WINDOW_NORMAL);

    while (key != 27) // press ESC to exit
    {
        // get screen size
        RECT desktop;
        const HWND hDesktop = GetDesktopWindow();
        GetWindowRect(hDesktop, &desktop);
        int height = desktop.bottom;
        int width = desktop.right;

        // capture screen
        HDC hwindowDC, hwindowCompatibleDC;

        int srcheight, srcwidth;
        HBITMAP hbwindow;
        Mat src;

        hwindowDC = GetDC(NULL);
        hwindowCompatibleDC = CreateCompatibleDC(hwindowDC);
        SetStretchBltMode(hwindowCompatibleDC, COLORONCOLOR);

        src.create(height, width, CV_8UC4);

        // create bitmap
        hbwindow = CreateCompatibleBitmap(hwindowDC, width, height);
        BITMAPINFOHEADER bi;

        bi.biSize = sizeof(BITMAPINFOHEADER);
        bi.biWidth = width;
        bi.biHeight = -height; // negative so (0,0) is at top left
        bi.biPlanes = 1;
        bi.biBitCount = 32;
        bi.biCompression = BI_RGB;
        bi.biSizeImage = 0;
        bi.biXPelsPerMeter = 0;
        bi.biYPelsPerMeter = 0;
        bi.biClrUsed = 0;
        bi.biClrImportant = 0;

        // use created bitmap
        SelectObject(hwindowCompatibleDC, hbwindow);
        StretchBlt(hwindowCompatibleDC, 0, 0, width, height, hwindowDC, 0, 0, width, height, SRCCOPY);
        GetDIBits(hwindowCompatibleDC, hbwindow, 0, height, src.data, (BITMAPINFO *)&bi, DIB_RGB_COLORS);

        // save image
        time_t now = time(0);
        stringstream ss;
        ss << now;
        string filename = "autoscr/" + ss.str() + ".jpg";
        imwrite(filename, src);

        // clean up
        DeleteObject(hbwindow);
        DeleteDC(hwindowCompatibleDC);
        ReleaseDC(NULL, hwindowDC);

        // delay 5 seconds
        this_thread::sleep_for(chrono::seconds(5));

        // check for key press
        key = waitKey(5);
    }

    return 0;
}
