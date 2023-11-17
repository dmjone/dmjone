import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
// import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ReminderApp extends JFrame {
    private JTextField timeField;
    private JTextArea messageArea, reminderListArea;
    private JButton setReminderButton;
    private JMenuBar menuBar;
    private Timer reminderTimer;
    private List<String> reminders = new ArrayList<>();
    private String logFilePath = System.getenv("TEMP") + "\\reminderLog.temp";
    private JMenuItem helpItem, aboutItem, exitItem, deleteLogItem;

    private ReminderApp() {
        setupFrame();
        createUIComponents();
        setupTimer();
        loadReminders();
        setupMenuBar();        
    }

    private void setupFrame() {
        setTitle("Reminder App");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout(5, 5));
        setSize(400, 350);
        setLocationRelativeTo(null);
    }

    private void createUIComponents() {
        JPanel formPanel = new JPanel(new GridLayout(0, 1, 5, 5));
        timeField = new JTextField(5);
        messageArea = new JTextArea(2, 20);
        setReminderButton = new JButton("Set Reminder");
        reminderListArea = new JTextArea(5, 20);
        reminderListArea.setEditable(false);

        formPanel.add(new JLabel("Time (HH:mm):"));
        formPanel.add(timeField);
        formPanel.add(new JLabel("Message:"));
        formPanel.add(new JScrollPane(messageArea));
        formPanel.add(setReminderButton);

        add(formPanel, BorderLayout.NORTH);
        add(new JScrollPane(reminderListArea), BorderLayout.CENTER);

        setReminderButton.addActionListener(this::onSetReminder);
    }

    private void setupMenuBar() {
        menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        helpItem = new JMenuItem("Help");
        aboutItem = new JMenuItem("About");
        exitItem = new JMenuItem("Exit");

        helpItem.addActionListener(e -> showHelpDialog());
        aboutItem.addActionListener(e -> showAboutDialog());
        exitItem.addActionListener(e -> System.exit(0));

        fileMenu.add(helpItem);
        fileMenu.add(aboutItem);
        fileMenu.add(exitItem);

        JMenu optionsMenu = new JMenu("Options");
        deleteLogItem = new JMenuItem("Delete Log");
        deleteLogItem.addActionListener(e -> deleteLogFile());
        optionsMenu.add(deleteLogItem);

        menuBar.add(fileMenu);
        menuBar.add(optionsMenu);
        setJMenuBar(menuBar);
    }

    private void setupTimer() {
        reminderTimer = new Timer(1000, e -> checkReminders());
        reminderTimer.start();
    }

    private void onSetReminder(ActionEvent event) {
        String reminder = timeField.getText() + " - " + messageArea.getText();
        reminders.add(reminder);
        updateReminderList();
        writeLog(reminder);
    }

    private void updateReminderList() {
        reminderListArea.setText(String.join("\n", reminders));
    }

    private void writeLog(String reminder) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(logFilePath, true))) {
            writer.write(reminder + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void checkReminders() {
        String currentTime = LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm"));
        boolean isRemoved = reminders.removeIf(reminder -> {
            if (reminder.startsWith(currentTime)) {
                sendWindowsNotification(reminder.split(" - ", 2)[1]);
                return true;
            }
            return false;
        });

        if (isRemoved) {
            updateReminderList();
            writeCurrentRemindersToLog();
        }
    }

    private void writeCurrentRemindersToLog() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(logFilePath, false))) {
            for (String reminder : reminders) {
                writer.write(reminder + "\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void sendWindowsNotification(String message) {
        String script = "$Text = '" + message.replace("'", "`'") + "';"
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

    private void deleteLogFile() {
        try {
            Files.deleteIfExists(Paths.get(logFilePath));
            reminders.clear();
            updateReminderList();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void loadReminders() {
        try {
            List<String> lines = Files.readAllLines(Paths.get(logFilePath));
            reminders = lines.stream().filter(line -> !line.trim().isEmpty()).collect(Collectors.toList());
            updateReminderList();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // private void showHelpDialog() {
    //     // Example help dialog content
    //     JOptionPane.showMessageDialog(this, "Help information goes here.", "Help", JOptionPane.INFORMATION_MESSAGE);
    // }

    private void showHelpDialog() {
        String helpText = "Simple Reminder App - User Guide\n\n"
                + "Starting the App:\n"
                + "- Run the UnifiedReminderApp class to start.\n"
                + "- Reminders from the log file are loaded automatically.\n\n"
                + "Setting a New Reminder:\n"
                + "1. Enter time in 'Time (HH:mm)' field (24-hour format).\n"
                + "2. Type the reminder message in the message area.\n"
                + "3. Click 'Set Reminder' to add it to the list and log file.\n\n"
                + "Viewing Reminders:\n"
                + "- Set reminders appear in the bottom text area, updated in real-time.\n\n"
                + "Reminder Notifications:\n"
                + "- You'll get a Windows notification when a reminder time is reached.\n"
                + "- Reminders are then removed from the app and log file.\n\n"
                + "Deleting the Log File:\n"
                + "- Use 'Options' > 'Delete Log' to clear reminders and the log file.\n\n"
                + "Closing the App:\n"
                + "- Close the window to exit. Reminders reload from the log file on restart.\n\n"
                + "Important Notes:\n"
                + "- Ensure time is in HH:mm format.\n"
                + "- Keep the app running to receive reminders.\n"
                + "- Allow PowerShell scripts for notifications.\n";

        JOptionPane.showMessageDialog(this, helpText, "Help - User Guide", JOptionPane.INFORMATION_MESSAGE);
    }

    // private void showAboutDialog() {
    //     // Example about dialog content
    //     JOptionPane.showMessageDialog(this, "About information goes here.", "About", JOptionPane.INFORMATION_MESSAGE);
    // }

    private void showAboutDialog() {
        String aboutText = "Simple Reminder App\n\n"
                + "Version: 1.0\n"
                + "Developed by Dr. Anurag Rana and Er. Divya Mohan\n"
                + "Website: dmj.one\n"
                + "Description: An effective tool for managing daily reminders.";

        JOptionPane.showMessageDialog(this, aboutText, "About Us", JOptionPane.INFORMATION_MESSAGE);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new ReminderApp().setVisible(true));
    }

}
