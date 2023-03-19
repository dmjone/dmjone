// Autodetect and give the ourput.
// #include <iostream>
// #include <string>
// #include <bitset>
// #include <sstream>
// #include <iomanip>

// using namespace std;

// int main()
// {
//     string input;

//     cout << "Enter a number: ";
//     cin >> input;

//     stringstream ss;
//     ss << input;

//     int decimal = 0;
//     bool is_hex = false, is_octal = false, is_binary = false;

//     if (input.find("0x") == 0 || input.find("0X") == 0)
//     {
//         is_hex = true;
//         ss >> hex >> decimal;
//     }
//     else if (input[0] == '0')
//     {
//         is_octal = true;
//         ss >> oct >> decimal;
//     }
//     else
//     {
//         for (char c : input)
//         {
//             if (c != '0' && c != '1')
//             {
//                 is_binary = false;
//                 break;
//             }
//             is_binary = true;
//         }
//         if (is_binary)
//         {
//             bitset<32> binary(input);
//             decimal = binary.to_ulong();
//         }
//         else
//         {
//             ss >> decimal;
//         }
//     }

//     cout << "Decimal: " << decimal << endl;
//     cout << "Binary: " << bitset<32>(decimal) << endl;
//     cout << "Octal: " << oct << decimal << endl;
//     cout << "Hexadecimal: " << hex << uppercase << decimal << endl;

//     return 0;
// }

// #include <iostream>
// #include <string>
// #include <bitset>
// #include <sstream>
// #include <iomanip>

// using namespace std;

// int main()
// {
//     string input, format;

//     cout << "Enter a number: ";
//     cin >> input;
//     cout << "Enter the number format (decimal, binary, octal, hexadecimal): ";
//     cin >> format;

//     stringstream ss;
//     ss << input;

//     int decimal = 0;

//     if (format == "hexadecimal" || format == "Hexadecimal" || input.find("0x") == 0 || input.find("0X") == 0)
//     {
//         ss >> hex >> decimal;
//     }
//     else if (format == "octal" || format == "Octal" || input[0] == '0')
//     {
//         ss >> oct >> decimal;
//     }
//     else if (format == "binary" || format == "Binary")
//     {
//         bitset<32> binary(input);
//         decimal = binary.to_ulong();
//     }
//     else if (format == "decimal" || format == "Decimal")
//     {
//         ss >> decimal;
//     }
//     else
//     {
//         cerr << "Invalid format. Please enter a valid format (decimal, binary, octal, hexadecimal)." << endl;
//         return 1;
//     }

//     cout << "Decimal: " << decimal << endl;
//     cout << "Binary: " << bitset<32>(decimal) << endl;
//     cout << "Octal: " << oct << decimal << endl;
//     cout << "Hexadecimal: " << hex << uppercase << decimal << endl;

//     return 0;
// }

// #include <iostream>
// #include <string>

// using namespace std;

// int binaryToDecimal(const string &binary)
// {
//     int decimal = 0;
//     for (char digit : binary)
//     {
//         decimal = decimal * 2 + (digit - '0');
//     }
//     return decimal;
// }

// string decimalToBinary(int decimal)
// {
//     string binary;
//     while (decimal > 0)
//     {
//         binary = to_string(decimal % 2) + binary;
//         decimal /= 2;
//     }
//     return binary;
// }

// string decimalToOctal(int decimal)
// {
//     string octal;
//     while (decimal > 0)
//     {
//         octal = to_string(decimal % 8) + octal;
//         decimal /= 8;
//     }
//     return octal;
// }

// string decimalToHexadecimal(int decimal)
// {
//     string hex;
//     const char *hex_digits = "0123456789ABCDEF";

//     while (decimal > 0)
//     {
//         hex = hex_digits[decimal % 16] + hex;
//         decimal /= 16;
//     }
//     return hex;
// }

// int main()
// {
//     string input, format;

//     cout << "Enter a number: ";
//     cin >> input;
//     cout << "Enter the number format (decimal, binary, octal, hexadecimal): ";
//     cin >> format;

//     int decimal = 0;

//     if (format == "hexadecimal" || format == "Hexadecimal" || input.find("0x") == 0 || input.find("0X") == 0)
//     {
//         for (size_t i = input.find_first_not_of("0x0X"), len = input.length(); i < len; ++i)
//         {
//             char c = input[i];
//             decimal = decimal * 16 + (c >= '0' && c <= '9' ? c - '0' : c >= 'A' && c <= 'F' ? c - 'A' + 10
//                                                                                             : c - 'a' + 10);
//         }
//     }
//     else if (format == "octal" || format == "Octal" || input[0] == '0')
//     {
//         for (size_t i = input.find_first_not_of('0'), len = input.length(); i < len; ++i)
//         {
//             decimal = decimal * 8 + (input[i] - '0');
//         }
//     }
//     else if (format == "binary" || format == "Binary")
//     {
//         decimal = binaryToDecimal(input);
//     }
//     else if (format == "decimal" || format == "Decimal")
//     {
//         for (char c : input)
//         {
//             decimal = decimal * 10 + (c - '0');
//         }
//     }
//     else
//     {
//         cerr << "Invalid format. Please enter a valid format (decimal, binary, octal, hexadecimal)." << endl;
//         return 1;
//     }

//     cout << "Decimal: " << decimal << endl;
//     cout << "Binary: " << decimalToBinary(decimal) << endl;
//     cout << "Octal: " << decimalToOctal(decimal) << endl;
//     cout << "Hexadecimal: " << decimalToHexadecimal(decimal) << endl;

//     return 0;
// }

// #include <iostream>
// using namespace std;

// string decimal_to_base_x(int n, int x)
// {
//     string result = "";
//     char hex_digits[] = "0123456789ABCDEF";

//     while (n != 0)
//     {
//         int c = n % x;
//         result = hex_digits[c] + result;
//         n /= x;
//     }

//     return result;
// }

// int binary_to_decimal(int n)
// {
//     int result = 0, i = 1;

//     while (n != 0)
//     {
//         int c = n % 10;
//         result += c * i;
//         n /= 10;
//         i *= 2;
//     }

//     return result;
// }

// void dectoall()
// {
//     int decimal_number;
//     cout << "Enter a decimal number: ";
//     cin >> decimal_number;

//     cout << "Binary: " << decimal_to_base_x(decimal_number, 2) << endl;
//     cout << "Octal: " << decimal_to_base_x(decimal_number, 8) << endl;
//     cout << "Hexadecimal: " << decimal_to_base_x(decimal_number, 16) << endl;
// }

// void bintoall()
// {
//     int binary_number;
//     cout << "Enter a binary number: ";
//     cin >> binary_number;

//     int decimal_from_binary = binary_to_decimal(binary_number);
//     cout << "Decimal: " << decimal_from_binary << endl;
//     cout << "Octal: " << decimal_to_base_x(decimal_from_binary, 8) << endl;
//     cout << "Hexadecimal: " << decimal_to_base_x(decimal_from_binary, 16) << endl;
// }

// int main()
// {
//     int n;
//     cout << "Menu:\n 1. Binary to decimal, octal, hexadecimal.\n 2. Decimal to Binary, Octal, hexadecimal\n.Enter a valid operation:";
//     cin >> n;

//     switch (n)
//     {
//     case 1:
//         bintoall();
//         break;
//     case 2:
//         dectoall();
//         break;
//     default:
//         cout << "Enter a valid number";
//         break;
//     }
//     return 0;
// }

// #include <iostream>
// using namespace std;

// class NumberConverter
// {
// private:
//     int input_base;
//     int input_number;

//     int binary_to_decimal(int n)
//     {
//         int result = 0, i = 1;

//         while (n != 0)
//         {
//             int c = n % 10;
//             result += c * i;
//             n /= 10;
//             i *= 2;
//         }

//         return result;
//     }

//     string decimal_to_base_x(int n, int x)
//     {
//         string result = "";
//         char hex_digits[] = "0123456789ABCDEF";

//         while (n != 0)
//         {
//             int c = n % x;
//             result = hex_digits[c] + result;
//             n /= x;
//         }

//         return result;
//     }

// public:
//     NumberConverter(int base, int number) : input_base(base), input_number(number)
//     {
//     }

//     void convert_and_display()
//     {
//         int decimal_number;

//         if (input_base == 2)
//         {
//             decimal_number = binary_to_decimal(input_number);
//         }
//         else
//         {
//             decimal_number = input_number;
//         }

//         cout << "Decimal: " << decimal_number << endl;
//         cout << "Binary: " << decimal_to_base_x(decimal_number, 2) << endl;
//         cout << "Octal: " << decimal_to_base_x(decimal_number, 8) << endl;
//         cout << "Hexadecimal: " << decimal_to_base_x(decimal_number, 16) << endl;
//     }
// };

// int main()
// {
//     int input_base, input_number;
//     cout << "Enter the base of the number you are entering (2, 8, 10, 16): ";
//     cin >> input_base;
//     cout << "Enter the number: ";
//     cin >> input_number;

//     NumberConverter converter(input_base, input_number);
//     converter.convert_and_display();

//     return 0;
// }

#include <iostream>
using namespace std;

int convert_to_decimal(int number, int base)
{
    int result = 0, i = 1;
    while (number != 0)
    {
        int c = number % 10;
        result += c * i;
        number /= 10;
        i *= base;
    }
    return result;
}

string convert_to_base_x(int number, int base)
{
    string result = "";
    char hex_digits[] = "0123456789ABCDEF";
    while (number != 0)
    {
        int c = number % base;
        result = hex_digits[c] + result;
        number /= base;
    }
    return result;
}

int main()
{
    int input_base, input_number;
    cout << "Enter the base (2, 8, 10, 16) and the number you want to convert - (Example: 2 1101) - and press Enter: ";
    cin >> input_base >> input_number;

    int decimal_number = (input_base != 10) ? convert_to_decimal(input_number, input_base) : input_number;
    cout << "\t Decimal: " << decimal_number << endl;
    cout << "\t Binary: " << convert_to_base_x(decimal_number, 2) << endl;
    cout << "\t Octal: " << convert_to_base_x(decimal_number, 8) << endl;
    cout << "\t Hexadecimal: " << convert_to_base_x(decimal_number, 16) << endl;

    return 0;
}