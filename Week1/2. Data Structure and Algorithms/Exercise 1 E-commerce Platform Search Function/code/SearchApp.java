package code;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SearchApp {
    public static void main(String[] args) {
        List<String> products = new ArrayList<>();
        products.add("Laptop");
        products.add("Smartphone");
        products.add("Wireless Mouse");
        products.add("Keyboard");
        products.add("Monitor");
        products.add("Charger");
        products.add("Laptop Bag");

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter product keyword to search: ");
        String keyword = scanner.nextLine().toLowerCase();

        boolean found = false;
        System.out.println("Search Results:");
        for (String product : products) {
            if (product.toLowerCase().contains(keyword)) {
                System.out.println("- " + product);
                found = true;
            }
        }

        if (!found) {
            System.out.println("No products matched your search.");
        }

        scanner.close();
    }
}