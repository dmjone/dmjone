/*
 * -----------------------------------------------------------
 * Java Programming (CSU1291)
 * Instructor: Dr. Anurag Rana | Author: Divya Mohan
 *
 * Program to display reminders on windows based on the time it is set.  
 *
 * This book is a part of the educational initiative by dmj.one
 * with aim of empowering and inspiring learners in the field of
 * Computer Science and Engineering through the respective courses.
 *
 * (c) 2023, Divya Mohan for dmj.one. All rights reserved.
 * -----------------------------------------------------------
 */

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class TimeKeeper_bak extends JFrame {
    private static final String LOG_FILE_PATH = System.getenv("TEMP") + "\\TimeKeeperLog.temp";
    private static final String TIME_FORMAT = "HH:mm";
    private JTextField timeField;
    private JTextArea messageArea, reminderListArea;
    private JButton setReminderButton;
    private List<String> reminders = new ArrayList<>();
    private Timer reminderTimer;

    public TimeKeeper_bak() {
        initUI();
        loadReminders();
        setupReminderTimer();
    }

    private void initUI() {
        setTitle("TimeKeeper_bak: A Java Reminder App");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout(5, 5));
        setSize(400, 350);
        setLocationRelativeTo(null);
        createComponents();
        setJMenuBar(createMenuBar());
    }

    private void createComponents() {
        add(createInputPanel(), BorderLayout.NORTH);
        add(createReminderListPanel(), BorderLayout.CENTER);
    }

    private JPanel createInputPanel() {
        JPanel inputPanel = new JPanel(new GridLayout(0, 1, 5, 5));
        timeField = new JTextField(5);
        messageArea = new JTextArea(2, 20);
        setReminderButton = new JButton("Set Reminder");
        setReminderButton.addActionListener(this::onSetReminder);

        inputPanel.add(new JLabel("Time (" + TIME_FORMAT + "):"));
        inputPanel.add(timeField);
        inputPanel.add(new JLabel("Message:"));
        inputPanel.add(new JScrollPane(messageArea));
        inputPanel.add(setReminderButton);

        return inputPanel;
    }

    private JScrollPane createReminderListPanel() {
        reminderListArea = new JTextArea(5, 20);
        reminderListArea.setEditable(false);
        return new JScrollPane(reminderListArea);
    }

    private JMenuBar createMenuBar() {
        JMenuBar menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");

        JMenuItem helpItem = new JMenuItem("Help");
        helpItem.addActionListener(e -> showHelpDialog());
        JMenuItem aboutItem = new JMenuItem("About");
        aboutItem.addActionListener(e -> showAboutDialog());
        JMenuItem exitItem = new JMenuItem("Exit");
        exitItem.addActionListener(e -> System.exit(0));

        fileMenu.add(helpItem);
        fileMenu.add(aboutItem);
        fileMenu.add(exitItem);

        JMenu optionsMenu = new JMenu("Options");
        JMenuItem deleteLogItem = new JMenuItem("Delete Log");
        deleteLogItem.addActionListener(e -> deleteLogFile());
        optionsMenu.add(deleteLogItem);

        menuBar.add(fileMenu);
        menuBar.add(optionsMenu);

        return menuBar;
    }

    private void setupReminderTimer() {
        reminderTimer = new Timer(1000, e -> checkReminders());
        reminderTimer.start();
    }

    private void onSetReminder(ActionEvent event) {
        String reminder = timeField.getText() + " - " + messageArea.getText();
        reminders.add(reminder);
        updateReminderList();
        appendToLog(reminder);
    }

    private void updateReminderList() {
        reminderListArea.setText(String.join("\n", reminders));
    }

    private void appendToLog(String reminder) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(LOG_FILE_PATH, true))) {
            writer.write(reminder + "\n");
        } catch (IOException e) {
            JOptionPane.showMessageDialog(this, "Error writing to log file.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void checkReminders() {
        String currentTime = LocalTime.now().format(DateTimeFormatter.ofPattern(TIME_FORMAT));
        boolean isRemoved = reminders.removeIf(reminder -> {
            if (reminder.startsWith(currentTime)) {
                sendNotification(reminder.split(" - ", 2)[1]);
                return true;
            }
            return false;
        });

        if (isRemoved) {
            updateReminderList();
            rewriteLog();
        }
    }

    private void rewriteLog() {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(LOG_FILE_PATH, false))) {
            for (String reminder : reminders) {
                writer.write(reminder + "\n");
            }
        } catch (IOException e) {
            JOptionPane.showMessageDialog(this, "Error rewriting reminders.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void sendNotification(String message) {
        String os = System.getProperty("os.name").toLowerCase();

        try {
            if (os.contains("win")) {
                // Windows Notification
                String script = "$Text = '" + message.replace("'", "`'") + "';"
                        + "[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] > $null;"
                        + "$Template = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText02);"
                        + "$TextElements = $Template.GetElementsByTagName('text');"
                        + "$TextElements[0].AppendChild($Template.CreateTextNode($Text));"
                        + "$Toast = [Windows.UI.Notifications.ToastNotification]::new($Template);"
                        + "[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('TimeKeeper_bak').Show($Toast);";
                new ProcessBuilder("powershell.exe", "-command", script).start();
            } else if (os.contains("mac")) {
                // macOS Notification
                String script = "display notification \"" + message + "\" with title \"TimeKeeper_bak Reminder\"";
                new ProcessBuilder("osascript", "-e", script).start();
            } else if (os.contains("nix") || os.contains("nux") || os.contains("aix")) {
                // Linux Notification (requires 'notify-send' to be installed)
                new ProcessBuilder("notify-send", "TimeKeeper_bak Reminder", message).start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void deleteLogFile() {
        try {
            Files.deleteIfExists(Paths.get(LOG_FILE_PATH));
            reminders.clear();
            updateReminderList();
        } catch (IOException e) {
            JOptionPane.showMessageDialog(this, "Error deleting reminders.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void loadReminders() {
        try {
            List<String> lines = Files.readAllLines(Paths.get(LOG_FILE_PATH));
            reminders = new ArrayList<>(lines);
            updateReminderList();
        } catch (IOException e) {
            // JOptionPane.showMessageDialog(this, "There are no reminders.\nPro Tip: Use" +
            // "single line reminders.", "Error", JOptionPane.ERROR_MESSAGE);
        }
    }

    private void showHelpDialog2() {
        String helpText = "TIMEKEEPER: A JAVA REMINDER APP - USER GUIDE\n\n"
                + "STARTING THE APP:\n"
                + "- Run the TimeKeeper_bak class to start.\n"
                + "- OR Run the TimeKeeper_bak.jar file to start.\n"
                + "- Reminders from the log file are loaded automatically.\n\n"
                + "SETTING A NEW REMINDER:\n"
                + "1. Enter time in 'Time (HH:mm)' field (24-hour format).\n"
                + "2. Type the reminder message in the message area.\n"
                + "3. Click 'Set Reminder' to add it to the list and log file.\n\n"
                + "VIEWING REMINDERS:\n"
                + "- Set reminders appear in the bottom text area, updated in real-time.\n\n"
                + "REMINDER NOTIFICATIONS:\n"
                + "- You'll get a Windows notification when a reminder time is reached.\n"
                + "- Reminders are then removed from the app and log file.\n\n"
                + "DELETING THE LOG FILE:\n"
                + "- Use 'Options' > 'Delete Log' to clear reminders and the log file.\n\n"
                + "CLOSING THE APP:\n"
                + "- Close the window to exit. Reminders reload from the log file on restart.\n\n"
                + "IMPORTANT NOTES:\n"
                + "- Ensure time is in HH:mm format.\n"
                + "- Keep the app running to receive reminders.\n"
                + "- Allow PowerShell scripts for notifications.\n";

        JOptionPane.showMessageDialog(this, helpText, "Help - User Guide", JOptionPane.INFORMATION_MESSAGE);
    }

    private void showHelpDialog() {
        String helpText = "TIMEKEEPER: A JAVA REMINDER APP - USER GUIDE\n\n"
                + "STARTING THE APP:\n"
                + "- Launch the app by running the 'TimeKeeper_bak' class or the 'TimeKeeper_bak.jar' file. Upon starting, the app automatically loads any existing reminders.\n\n"
                + "SETTING A NEW REMINDER:\n"
                + "1. Locate the 'Time (HH:mm)' field at the top. Enter the desired reminder time in a 24-hour format.\n"
                + "2. Below the time field, find the 'Message' area. Here, type in the text for your reminder.\n"
                + "3. Click 'Set Reminder' to save your reminder to the display list.\n\n"
                + "VIEWING REMINDERS:\n"
                + "- Your active reminders are displayed in a list at the bottom of the app window. This list updates in real-time as you add or remove reminders.\n\n"
                + "REMINDER NOTIFICATIONS:\n"
                + "- When the set time for a reminder arrives, you will receive a notification on your Windows system. After the notification, the reminder is automatically removed from both the app and the log file.\n\n"
                + "DELETING THE LOGS:\n"
                + "- To clear all your reminders and the logs, navigate to 'Options' in the menu bar and select 'Delete Log'.\n\n"
                + "CLOSING THE APP:\n"
                + "- Simply close the app window to exit. Your reminders are safely stored and will reload from the log when you restart the app.\n\n"
                + "IMPORTANT NOTES:\n"
                + "- Ensure the time is in the 'HH:mm' format and keep the app running to receive reminders."
                + "- Allow PowerShell scripts for notifications on Windows.\n\n"
                + "FAQ & TIPS:\n"
                + "- Q: Can I use TimeKeeper_bak on operating systems other than Windows?\n"
                + "  A: TimeKeeper_bak is designed for Windows, macOS, and linux varients but Notifications might not work on other OSes.\n"
                + "- Q: Why am I not receiving reminder notifications?\n"
                + "  A: Ensure that PowerShell scripts are allowed on your system. Also, check if the app is running in the background.\n\n"
                + "TROUBLESHOOTING:\n"
                + "- If reminders are not showing up, check if the log file is correctly located in the TEMP directory.\n"
                + "- For notification issues, verify that your system settings allow for app notifications.\n"
                + "- If the app is unresponsive, try restarting it. Persistent issues may require reinstallation.\n\n";

        JOptionPane.showMessageDialog(this, helpText, "Help - User Guide", JOptionPane.INFORMATION_MESSAGE);
    }

    // private void showAboutDialog() {
    //     String aboutText = "TimeKeeper_bak: A Java Reminder App\n\n"
    //             + "Version: 1.0\n"
    //             + "Developers: Dr. Anurag Rana and Er. Divya Mohan, Shoolini University\n"
    //             + "Distributed under the Educational Initative by dmj.one\n"
    //             + "Description: An simple and effective tool for managing daily reminders securely without sending data anywhere.";

    //     JOptionPane.showMessageDialog(this, aboutText, "About Us", JOptionPane.INFORMATION_MESSAGE);
    // }

    // private void showAboutDialog() {
    //     String aboutText = "<html><body>"
    //             + "<h2>TimeKeeper_bak: A Java Reminder App</h2>"
    //             + "<p><strong>Version:</strong> 1.0<br/>"
    //             + "<strong>Developers:</strong> Dr. Anurag Rana and Er. Divya Mohan, Shoolini University<br/>"
    //             + "<strong>Distributed under:</strong> Educational Initiative by dmj.one</p>"
    //             + "<p>An simple and effective tool for managing daily reminders securely without sending data anywhere. This application offers user-friendly features to create, edit, and delete reminders quickly and efficiently, ensuring your daily tasks are always on track.</p>"
    //             + "</body></html>";

    //     JOptionPane.showMessageDialog(this, aboutText, "About Us", JOptionPane.INFORMATION_MESSAGE);
    // }

    private void showAboutDialog() {
        String aboutText = "TIMEKEEPER: A JAVA REMINDER APP\n\n"
                + "VERSION: 1.0\n"
                + "DEVELOPERS: Dr. Anurag Rana and Er. Divya Mohan, Shoolini University\n"
                + "DISTRIBUTED UNDER: Educational Initiative by dmj.one\n\n"
                + "DESCRIPTION: An simple and effective tool for managing daily reminders \n"
                + "securely without sending data anywhere. This app allows users to set \n"
                + "and manage reminders with ease, ensuring that your important tasks are\n"
                + "never forgotten.";

        JOptionPane.showMessageDialog(this, aboutText, "About Us", JOptionPane.INFORMATION_MESSAGE);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TimeKeeper_bak().setVisible(true));
    }
}

