import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class WindowsNotificationApp extends JFrame {
    private JTextField timeField;
    private JTextArea messageArea;
    private JButton setReminderButton;
    private Timer reminderTimer;
    private String reminderTime;
    private String reminderMessage;

    public WindowsNotificationApp() {
        createUI();
        initTimer();
    }

    private void createUI() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(300, 200);
        setLocationRelativeTo(null);
        setLayout(new BoxLayout(getContentPane(), BoxLayout.Y_AXIS));

        timeField = new JTextField();
        messageArea = new JTextArea();
        setReminderButton = new JButton("Set Reminder");

        add(new JLabel("Time (HH:mm):"));
        add(timeField);
        add(new JLabel("Message:"));
        add(messageArea);
        add(setReminderButton);

        setReminderButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                reminderTime = timeField.getText();
                reminderMessage = messageArea.getText();
            }
        });
    }

    private void initTimer() {
        reminderTimer = new Timer(1000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                checkReminder();
            }
        });
        reminderTimer.start();
    }

    private void checkReminder() {
        String currentTime = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm"));
        if (currentTime.equals(reminderTime)) {
            sendWindowsNotification(reminderMessage);
            reminderTimer.stop(); // Stop timer after notification
        }
    }

    private void sendWindowsNotification(String message) {
        String script = "$Text = '" + message + "';"
                + "[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] > $null;"
                + "$Template = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText02);"
                + "$TextElements = $Template.GetElementsByTagName('text');"
                + "$TextElements[0].AppendChild($Template.CreateTextNode($Text));"
                + "$Toast = [Windows.UI.Notifications.ToastNotification]::new($Template);"
                + "[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('ReminderApp').Show($Toast);";
        try {
            ProcessBuilder builder = new ProcessBuilder("powershell.exe", "-command", script);
            builder.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new WindowsNotificationApp().setVisible(true);
            }
        });
    }
}
