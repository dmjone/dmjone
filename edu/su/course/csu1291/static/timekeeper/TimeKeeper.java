/*
 * -----------------------------------------------------------
 * Java Programming (CSU1291)
 * Instructor: Dr. Anurag Rana | Author: Divya Mohan
 *
 * Program / Application to display reminders on windows, macOS
 * and linux based on the time and message set.
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

public class TimeKeeper extends JFrame {
    private static final String LOG_FILE_PATH = System.getenv("TEMP") + "\\TimeKeeperLog.temp";
    private static final String TIME_FORMAT = "HH:mm";
    private JTextField timeField;
    private JTextArea messageArea, reminderListArea;
    private JButton setReminderButton;
    private List<String> reminders = new ArrayList<>();
    private Timer reminderTimer;

    public TimeKeeper() {
        initUI();
        loadReminders();
        setupReminderTimer();
    }

    private void initUI() {
        setTitle("TimeKeeper: A Java Reminder App");
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
                        + "[Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('TimeKeeper').Show($Toast);";
                new ProcessBuilder("powershell.exe", "-command", script).start();
            } else if (os.contains("mac")) {
                // macOS Notification
                String script = "display notification \"" + message + "\" with title \"TimeKeeper Reminder\"";
                new ProcessBuilder("osascript", "-e", script).start();
            } else if (os.contains("nix") || os.contains("nux") || os.contains("aix")) {
                // Linux Notification (requires 'notify-send' to be installed)
                new ProcessBuilder("notify-send", "TimeKeeper Reminder", message).start();
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
            JOptionPane.showMessageDialog(this,
                    "There are no reminders set yet.\nLaunching first time? Start by setting up a reminder.\n\nPro Tip: Use single line reminder messages to prevent errors.",
                    "Information", JOptionPane.INFORMATION_MESSAGE);
        }
    }

    private void showHelpDialog() {
        String helpText = "TIMEKEEPER: A JAVA REMINDER APP - USER GUIDE\n\n"
                + "STARTING THE APP:\n"
                + "- Launch the app by running the 'TimeKeeper' class or the 'TimeKeeper.jar' file. Upon starting, the app automatically loads any existing reminders.\n\n"
                + "SETTING A NEW REMINDER:\n"
                + "1. Locate the 'Time (HH:mm)' field at the top. Enter the desired reminder time in a 24-hour format.\n"
                + "2. Below the time field, find the 'Message' area. Here, type in the text for your reminder.\n"
                + "3. Click 'Set Reminder' to save your reminder to the display list.\n\n"
                + "VIEWING REMINDERS:\n"
                + "- Your active reminders are displayed in a list at the bottom of the app window. This list updates in real-time as you add or remove reminders.\n\n"
                + "REMINDER NOTIFICATIONS:\n"
                + "- When the set time for a reminder arrives, you will receive a notification on your Windows system. After the notification, the reminder is\nautomatically removed from both the app and the log file.\n\n"
                + "DELETING THE LOGS:\n"
                + "- To clear all your reminders and the logs, navigate to 'Options' in the menu bar and select 'Delete Log'.\n\n"
                + "CLOSING THE APP:\n"
                + "- Simply close the app window to exit. Your reminders are safely stored and will reload from the log when you restart the app.\n\n"
                + "IMPORTANT NOTES:\n"
                + "- Ensure the time is in the 'HH:mm' format and keep the app running to receive reminders."
                + "- Allow PowerShell scripts for notifications on Windows.\n\n"
                + "FAQ & TIPS:\n"
                + "- Q: Can I use TimeKeeper on operating systems other than Windows?\n"
                + "  A: TimeKeeper is designed for Windows, macOS, and linux varients but Notifications might not work on other OSes.\n"
                + "- Q: Why am I not receiving reminder notifications?\n"
                + "  A: Ensure that PowerShell scripts are allowed on your system. Also, check if the app is running in the background.\n\n"
                + "TROUBLESHOOTING:\n"
                + "- If reminders are not showing up, check if the log file is correctly located in the TEMP directory. For notification issues, verify that\n your"
                + "system settings allow for app notifications. If the app is unresponsive, try restarting it. Persistent issues? Just delete the log using\n 'Delete Log' from options .\n\n";

        JOptionPane.showMessageDialog(this, helpText, "Help - User Guide", JOptionPane.INFORMATION_MESSAGE);
    }

    private void showAboutDialog() {
        String aboutText = "TimeKeeper: A Java Reminder App\n(c) 2007 - 2023 Divya Mohan for dmj.one \n\n"
                + "Course: Java Programming (CSU1291)\n"
                + "Project Version: 1.0\n"
                + "Developed by: Er. Divya Mohan, in collaboration with dmj.one and Shoolini University\n"
                + "Mentored by: Dr. Anurag Rana\n\n"
                + "Distributed for: Shoolini University euniv Portal\n"
                + "Description: A simple and effective tool for managing daily reminders securely without\n"
                + "sending data anywhere. Created to enhance productivity and organization this app\n"
                + "allows users to set and manage reminders with ease, ensuring that important tasks are\n"
                + "never forgotten.\n\n"
                + "Special thanks to Shoolini University for their support and encouragement in this project.";

        JOptionPane.showMessageDialog(this, aboutText, "About Us", JOptionPane.INFORMATION_MESSAGE);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TimeKeeper().setVisible(true));
    }
}
