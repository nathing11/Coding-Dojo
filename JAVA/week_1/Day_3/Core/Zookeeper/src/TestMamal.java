public class TestMamal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Gorilla gorilla = new Gorilla ("Kong", 100);
		
	
		
		gorilla.throwSomething();
		gorilla.throwSomething();
		gorilla.throwSomething();
		gorilla.eatBananas();
		gorilla.eatBananas();
		gorilla.climb();
		
		gorilla.displayEnergy();
		
		Bat bat1 = new Bat ("batbout", 300);
		bat1.attackTown();
		bat1.attackTown();
		bat1.attackTown();
		bat1.eatHumans();
		bat1.eatHumans();
		bat1.fly();
		bat1.fly();
		bat1.displayEnergy();
	}

}