public class Gorilla extends Mamal {
	private int energy;
	public Gorilla() {
	}
	public Gorilla(String name, int energy) {
		super(name, energy);
	}
	public int getEnergy() {
		return energy;
	}
	public void setEnergy(int energy) {
		this.energy = energy;
	}
	public void throwSomething(){
		this.energy -= 5;
		System.out.println( "the gorilla has thrown something ");
	}
	
	
	public void eatBananas() {
		this.energy += 10;
		System.out.println( "the gorilla is satisfied ");
	}
	
	
	public void climb(){
	this.energy -= 10;
	System.out.println( "the gorilla has climbed a tree");
	}
}
