import java.util.ArrayList;
public class TestOrders{
    public static void main(String[] args) {
        Items items1 = new Items();
        items1.name = "mocha";
        items1.price=1.5;
        Items items2 = new Items();
        items2.name = "latte";
        items2.price=4.2;
        Items items3 = new Items();
        items3.name = "drip ";
        items3.price=2.2;
        Items items4 = new Items();
        items4.name = "cappuccino";
        items4.price=5.2;

        Order order1 = new Order();
        System.out.println(order1.total);
        order1.name = "Cindhuri";
        
        Order order2 = new Order();
        order2.name = "Jimmy";

        Order order3 = new Order();
        order3.name = "Noah";

        Order order4 = new Order();
        order3.name = "Sam";


        order2.items.add(items1);
        order2.total += items1.price;

        order3.items.add(items4);
        order3.total += items4.price;

        order4.items.add(items2);
        order4.total += items2.price;



        order1.ready = true;


        order4.items.add(items2);
        order4.items.add(items2);
        order4.total += items2.price * 2;

        order2.ready = true;

        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready);

        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);
    
        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total);
        System.out.printf("Ready: %s\n", order4.ready);
    }
}
