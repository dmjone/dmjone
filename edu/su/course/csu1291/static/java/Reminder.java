import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class Reminder extends JFrame {
    private JTextField timeField;
    private JTextArea messageArea;
    private JButton setReminderButton, showLogButton;
    private String logFilePath;
    private final String TASK_NAME_PREFIX = "ReminderAppTask_";
    private final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm yyyy-MM-dd");

    public Reminder() {
        logFilePath = System.getenv("TEMP") + "\\reminderLog.txt";
        createUI();
    }

    private void createUI() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(350, 250);
        setLocationRelativeTo(null);
        setLayout(new BoxLayout(getContentPane(), BoxLayout.Y_AXIS));

        timeField = new JTextField();
        messageArea = new JTextArea();
        setReminderButton = new JButton("Set Reminder");
        showLogButton = new JButton("Show Log");

        add(new JLabel("Time (HH:mm yyyy-MM-dd):"));
        add(timeField);
        add(new JLabel("Message:"));
        add(messageArea);
        add(setReminderButton);
        add(showLogButton);

        setReminderButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String time = timeField.getText();
                String message = messageArea.getText();
                scheduleReminder(time, message);
                logReminder(time, message);
            }
        });

        showLogButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                displayLog();
            }
        });
    }

    private void scheduleReminder(String time, String message) {
        String taskName = TASK_NAME_PREFIX + System.currentTimeMillis();
        String dateTime = LocalDateTime.parse(time, dateTimeFormatter).format(DateTimeFormatter.ofPattern("HH:mm yyyy/MM/dd"));

        String command = "schtasks /create /tn " + taskName
                + " /tr \"powershell.exe -command \\\"& {[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] > $null; $Template = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText02); $TextElements = $Template.GetElementsByTagName('text'); $TextElements[0].AppendChild($Template.CreateTextNode('" + message + "')); $Toast = [Windows.UI.Notifications.ToastNotification]::new($Template); [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('ReminderApp').Show($Toast); schtasks /delete /tn " + taskName + " /f}\\\"\" /sc once /st " + dateTime;

        try {
            Runtime.getRuntime().exec(command);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void logReminder(String time, String message) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(logFilePath, true))) {
            writer.write(time + " - " + message + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void displayLog() {
        try {
            List<String> lines = Files.readAllLines(Paths.get(logFilePath));
            JOptionPane.showMessageDialog(null, String.join("\n", lines), "Reminder Log", JOptionPane.INFORMATION_MESSAGE);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                new Reminder().setVisible(true);
            }
        });
    }
}
