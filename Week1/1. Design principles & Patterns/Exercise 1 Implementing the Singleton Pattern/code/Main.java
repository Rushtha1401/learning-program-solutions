package code;

public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();

        obj1.showMessage();
        obj2.showMessage();

        System.out.println("Are both instances the same? " + (obj1 == obj2));
    }
}
