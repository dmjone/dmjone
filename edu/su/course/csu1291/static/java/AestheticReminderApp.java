import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class AestheticReminderApp extends JFrame {
    private JTextField timeField;
    private JTextArea messageArea;
    private String logFilePath;
    private JMenuBar menuBar;
    private JMenu menu;
    private JMenuItem setReminderItem, showLogItem;

    public AestheticReminderApp() {
        logFilePath = System.getenv("TEMP") + "\\reminderLog.txt";
        createUI();
    }

    private void createUI() {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }

        setTitle("Aesthetic Reminder App");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 300);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        createMenu();

        JPanel formPanel = new JPanel();
        formPanel.setLayout(new GridLayout(0, 1));
        timeField = new JTextField();
        messageArea = new JTextArea(5, 20); // Increased size for better visibility
        formPanel.add(new JLabel("Time (HH:mm):"));
        formPanel.add(timeField);
        formPanel.add(new JLabel("Message:"));
        formPanel.add(new JScrollPane(messageArea)); // Added scroll pane for better text area handling

        add(formPanel, BorderLayout.CENTER);
    }

    private void createMenu() {
        menuBar = new JMenuBar();
        menu = new JMenu("Options");
        setReminderItem = new JMenuItem("Set Reminder");
        showLogItem = new JMenuItem("Show Log");

        setReminderItem.addActionListener(this::setReminder);
        showLogItem.addActionListener(this::displayLog);

        menu.add(setReminderItem);
        menu.add(showLogItem);
        menuBar.add(menu);
        setJMenuBar(menuBar);
    }

    private void setReminder(ActionEvent event) {
        String reminderTime = timeField.getText();
        String reminderMessage = messageArea.getText();
        logReminder(reminderTime, reminderMessage);
        
        // Here you should schedule the PowerShell script to run at the reminder time
        // This part is not implemented due to complexity
    }

    private void logReminder(String time, String message) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(logFilePath, true))) {
            writer.write(time + " - " + message + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void displayLog(ActionEvent event) {
        try {
            List<String> lines = Files.readAllLines(Paths.get(logFilePath));
            JOptionPane.showMessageDialog(null, String.join("\n", lines), "Reminder Log", JOptionPane.INFORMATION_MESSAGE);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new AestheticReminderApp().setVisible(true));
    }
}
