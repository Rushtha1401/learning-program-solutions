package code;

import java.util.Scanner;

public class ForecastApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of months of earnings data: ");
        int n = scanner.nextInt();

        double[] earnings = new double[n];

        System.out.println("Enter earnings for each month:");
        for (int i = 0; i < n; i++) {
            System.out.print("Month " + (i + 1) + ": ");
            earnings[i] = scanner.nextDouble();
        }

        double totalGrowth = 0;
        for (int i = 1; i < n; i++) {
            totalGrowth += (earnings[i] - earnings[i - 1]);
        }

        double avgGrowth = totalGrowth / (n - 1);
        double forecast = earnings[n - 1] + avgGrowth;

        System.out.println("\nAverage monthly growth: " + avgGrowth);
        System.out.println("Forecasted next month earning: " + forecast);

        scanner.close();
    }
}
