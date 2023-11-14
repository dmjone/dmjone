import javax.swing.*;
import java.awt.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.stream.Collectors;

public class PatternDisplay extends JFrame {
    private JPanel starPanel;
    private JTextField patternInput;
    private String numberString = "123454321";

    public PatternDisplay() {
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
        pack(); // This will replace setSize() and will set the frame size based on its contents
        setExtendedState(JFrame.MAXIMIZED_BOTH);
        add(starPanel, BorderLayout.CENTER);
        add(docPanel, BorderLayout.EAST);        
        setLocationRelativeTo(null);
        setVisible(true);
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

        JPanel docPanel = new JPanel(new BorderLayout());
        docPanel.setPreferredSize(new Dimension(docWidth, screenSize.height));

        JLabel instructionsLabel = new JLabel(readHtmlContent("PatternDisplay.html"));
        JScrollPane scrollPane = new JScrollPane(instructionsLabel);
        scrollPane.setBorder(BorderFactory.createEmptyBorder());

        patternInput = new JTextField(numberString, 20);
        patternInput.addActionListener(e -> {
            numberString = patternInput.getText();
            SwingUtilities.invokeLater(starPanel::repaint);
        });

        JPanel inputPanel = createInputPanel();

        docPanel.add(scrollPane, BorderLayout.CENTER);
        docPanel.add(inputPanel, BorderLayout.SOUTH);

        return docPanel;
    }

    private JPanel createInputPanel() {
        JPanel inputPanel = new JPanel();
        inputPanel.setBackground(new Color(213, 245, 227));
        inputPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        inputPanel.add(new JLabel("<html><strong>Enter Pattern:</strong></html>"));
        inputPanel.add(patternInput);
        return inputPanel;
    }

    private String readHtmlContent(String filePath) {
        try {
            return Files.lines(Paths.get(filePath)).collect(Collectors.joining("\n"));
        } catch (IOException e) {
            e.printStackTrace();
            return "<html><body>Error loading instructions.</body></html>";
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new PatternDisplay().setVisible(true));
    }
}
