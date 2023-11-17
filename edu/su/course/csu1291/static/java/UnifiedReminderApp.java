/*
 *  Program to display reminders on windows based on the time it is set.  
 *  Authors: Er. Divya Mohan under the guidance of Dr. Anurag Rana
 */

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class UnifiedReminderApp extends JFrame {
    private JTextField timeField;
    private JTextArea messageArea, reminderListArea;
    private JButton setReminderButton;
    private JMenuBar menuBar;
    private String logFilePath;
    private Timer reminderTimer;
    private List<String> reminders;
    private JMenuItem helpItem, aboutUsItem, exitItem, deleteLogItem;

    private UnifiedReminderApp() {
        logFilePath = System.getenv("TEMP") + "\\reminderLog.temp";
        reminders = new ArrayList<>();
        createUI();
        initTimer();
        loadRemindersFromLog();
        createMenu();
    }

    private void createUI() {
        setTitle("Simple Reminder App");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 300);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        JPanel formPanel = new JPanel(new GridLayout(0, 1));
        timeField = new JTextField();
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

        setReminderButton.addActionListener(this::setReminder);
    }

    private void createMenu() {
        menuBar = new JMenuBar();

        // File Menu
        JMenu fileMenu = new JMenu("File");
        helpItem = new JMenuItem("Help");
        helpItem.addActionListener(e -> showHelpGuide());
        aboutUsItem = new JMenuItem("About Us");
        aboutUsItem.addActionListener(e -> showAboutUs());
        exitItem = new JMenuItem("Exit");
        exitItem.addActionListener(e -> System.exit(0));
        fileMenu.add(helpItem);
        fileMenu.add(aboutUsItem);
        fileMenu.add(exitItem);

        // Options Menu
        JMenu optionsMenu = new JMenu("Options");
        deleteLogItem = new JMenuItem("Delete Log");
        deleteLogItem.addActionListener(e -> deleteLogFile());
        optionsMenu.add(deleteLogItem);

        menuBar.add(fileMenu);
        menuBar.add(optionsMenu);
        setJMenuBar(menuBar);
    }

    private void initTimer() {
        reminderTimer = new Timer(1000, e -> checkReminders());
        reminderTimer.start();
    }

    private void setReminder(ActionEvent event) {
        String reminderTime = timeField.getText();
        String reminderMessage = messageArea.getText();
        String reminder = reminderTime + " - " + reminderMessage;
        reminders.add(reminder);
        updateReminderListArea();
        logReminder(reminder);
    }

    private void logReminder(String reminder) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(logFilePath, true))) {
            writer.write(reminder + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void updateReminderListArea() {
        reminderListArea.setText(String.join("\n", reminders));
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
            updateReminderListArea();
            updateLogWithCurrentReminders();
        }
    }

    private void updateLogWithCurrentReminders() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(logFilePath, false))) {
            for (String reminder : reminders) {
                writer.write(reminder + "\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
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

    private void deleteLogFile() {
        try {
            Files.deleteIfExists(Path.of(logFilePath));
            reminders.clear();
            updateReminderListArea();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private void loadRemindersFromLog() {
        try {
            List<String> lines = Files.readAllLines(Paths.get(logFilePath));
            reminders = lines.stream().filter(line -> !line.trim().isEmpty()).collect(Collectors.toList());
            updateReminderListArea();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void showHelpGuide() {
        String helpText = "Simple Reminder App - User Guide\n\n"
                + "Starting the App:\n"
                + "- Launch the app by running the UnifiedReminderApp class.\n"
                + "- When the app starts, it automatically loads any reminders set previously from the log file.\n\n"
                + "Setting a New Reminder:\n"
                + "1. Enter Reminder Details:\n"
                + "   - In the \"Time (HH:mm)\" field, enter the time for the reminder in 24-hour format (e.g., \"15:30\" for 3:30 PM).\n"
                + "   - In the message area, type the reminder message you want to be displayed.\n"
                + "2. Set the Reminder:\n"
                + "   - Click the \"Set Reminder\" button. The reminder will be added to the list and saved in the log file.\n\n"
                + "Viewing Set Reminders:\n"
                + "- The reminders are listed in the large text area at the bottom of the app. This list is updated every time a new reminder is set.\n\n"
                + "Reminder Notification:\n"
                + "- When the system time matches a set reminder time, a Windows notification will pop up with the reminder message.\n"
                + "- After the reminder is shown, it will be automatically removed from both the interface and the log file.\n\n"
                + "Deleting the Log File:\n"
                + "- To delete all reminders and clear the log file:\n"
                + "  - Click on the \"Options\" menu in the menu bar.\n"
                + "  - Select \"Delete Log\". This will clear all the reminders from the app and delete the log file.\n\n"
                + "Closing the App:\n"
                + "- Simply close the window to exit the app. When reopened, the app will load reminders from the log file if it wasn't deleted.\n\n"
                + "Important Notes:\n"
                + "- **Time Format**: Make sure to enter the time in HH:mm format (24-hour format).\n"
                + "- **Keep the App Running**: For reminders to work, the app needs to be running. If you close the app, it won't be able to show reminders.\n"
                + "- **Windows Notification**: The app uses PowerShell scripts to display notifications on Windows. Ensure that your system allows running these scripts.\n";

        JOptionPane.showMessageDialog(this, helpText, "Help - User Guide", JOptionPane.INFORMATION_MESSAGE);
    }

    private void showAboutUs() {
        String aboutText = "Simple Reminder App\n\n"
                + "Version: 1.0\n"
                + "Author: Dr. Anurag Rana, Er. Divya Mohan\n"
                + "Developed by: dmj.one\n"              
                + "Description: This application is designed to help you manage your daily reminders effectively.";

        JOptionPane.showMessageDialog(this, aboutText, "About Us", JOptionPane.INFORMATION_MESSAGE);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new UnifiedReminderApp().setVisible(true));
    }
}
