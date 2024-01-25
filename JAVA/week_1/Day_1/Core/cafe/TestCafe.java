import java.util.ArrayList;
public class TestCafe {
    public static void main(String[] args) {
            CafeUtil CafeNew = new CafeUtil();
            int streakGoal = CafeNew.getStreakGoal();

            double[] prices = new double[]{3.5, 1.5, 4.0, 4.5};
            double testCafee=CafeNew.getOrderTotal(prices);

            ArrayList<String> myStr= new ArrayList<String>();
            myStr.add("drip coffe");
            myStr.add("cappucino");
            myStr.add("latte");
            myStr.add("mocha");
            CafeNew.displayMenu(myStr);




            
            System.out.println(displayMenu);
    }
}
