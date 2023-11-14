import javax.swing.*;
import java.awt.*;
import java.util.Collections;
import java.util.concurrent.ExecutionException;
import java.net.URL;
import java.util.Scanner;
import java.nio.charset.StandardCharsets;

public class PD extends JFrame {
    private JPanel starPanel;
    private JTextField patternInput;
    private String numberString = "123454321";
    private JLabel instructionsLabel;

    public PD() {
        super("Star Pattern Demonstrator");

        starPanel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                int fontSize = calculateFontSize();
                g.setFont(new Font("Monospaced", Font.BOLD, fontSize));
                g.setColor(Color.BLACK);
                drawStars(g, fontSize);
            }
        };

        JPanel docPanel = createDocumentationPanel();

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pack(); // Sizes the frame so that all its contents are at or above their preferred
                // sizes
        setExtendedState(JFrame.MAXIMIZED_BOTH);
        add(starPanel, BorderLayout.CENTER);
        add(docPanel, BorderLayout.EAST);
        setLocationRelativeTo(null);
        setVisible(true);

        new SwingWorker<String, Void>() {
            @Override
            protected String doInBackground() throws Exception {
                // Fetch content from URL
                return fetchHtmlContent("http://127.0.0.1:5500/edu/su/course/csu1291/static/PatternDisplay.html");
            }

            @Override
            protected void done() {
                try {
                    // Update the instructionsLabel on the EDT
                    String htmlContent = get();
                    instructionsLabel.setText(htmlContent);
                } catch (InterruptedException | ExecutionException e) {
                    instructionsLabel.setText("<html><body>Error loading instructions.</body></html>");
                    e.printStackTrace();
                }
            }
        }.execute();
    }

    private int calculateFontSize() {
        int panelHeight = starPanel.getHeight();
        int panelWidth = starPanel.getWidth();
        int maxCharHeight = panelHeight / numberString.length();
        int maxCharWidth = panelWidth / numberString.length();
        return Math.min(maxCharHeight, maxCharWidth);
    }

    private void drawStars(Graphics g, int fontSize) {
        int y = fontSize;
        for (char ch : numberString.toCharArray()) {
            int n = Character.getNumericValue(ch);
            String stars = String.join("", Collections.nCopies(n, "*"));
            int x = (starPanel.getWidth() - g.getFontMetrics().stringWidth(stars)) / 2;
            g.drawString(stars, x, y);
            y += fontSize;
        }
    }

    private JPanel createDocumentationPanel() {
        int minDocWidth = 300;
        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        int docWidth = Math.max(screenSize.width / 2, minDocWidth);

        instructionsLabel = new JLabel("Loading instructions...");
        JScrollPane scrollPane = new JScrollPane(instructionsLabel);
        scrollPane.setBorder(BorderFactory.createEmptyBorder());

        patternInput = new JTextField(numberString, 20);
        patternInput.addActionListener(e -> {
            numberString = patternInput.getText();
            SwingUtilities.invokeLater(starPanel::repaint);
        });

        JPanel inputPanel = new JPanel();
        inputPanel.setBackground(new Color(213, 245, 227));
        inputPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        inputPanel.add(new JLabel("<html><strong>Enter Pattern:</strong></html>"));
        inputPanel.add(patternInput);

        JPanel docPanel = new JPanel(new BorderLayout());
        docPanel.setPreferredSize(new Dimension(docWidth, screenSize.height));

        docPanel.add(scrollPane, BorderLayout.CENTER);
        docPanel.add(inputPanel, BorderLayout.SOUTH);

        return docPanel;
    }

    private String fetchHtmlContent(String urlString) {
        StringBuilder content = new StringBuilder();
        try {
            URL url = new URL(urlString);
            try (Scanner scanner = new Scanner(url.openStream(), StandardCharsets.UTF_8.toString())) {
                while (scanner.hasNextLine()) {
                    content.append(scanner.nextLine()).append("\n");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "<html><body>Error loading instructions.</body></html>";
        }
        return content.toString();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new PD().setVisible(true));
    }
}
