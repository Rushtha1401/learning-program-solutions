package code;

import java.io.Serializable;

public final class Singleton implements Serializable, Cloneable {

    private Singleton() {
        if (Holder.INSTANCE != null) {
            throw new RuntimeException("Use getInstance() method to create");
        }
    }

    private static class Holder {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return Holder.INSTANCE;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        throw new CloneNotSupportedException("Cloning not allowed for Singleton");
    }

    protected Object readResolve() {
        return getInstance();
    }

    public void showMessage() {
        System.out.println("Singleton instance invoked: " + this.hashCode());
    }
}
