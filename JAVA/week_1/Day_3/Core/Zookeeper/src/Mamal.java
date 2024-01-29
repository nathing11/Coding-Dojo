public class Mamal {
		private String name; 
		private int energy;
		// CONSTRUCTPR (zero-args)
		public Mamal(){
		}
		// CONSTRUCTPR (all-args)
		public Mamal(String name, int energy) {
			super();
			this.name = name;
			this.energy = 100;
		}
		// METHODS
		public void displayEnergy () {
			System.out.println(String.format("the %s Energy is %s ",this.getName(), this.getEnergy()));
		}
		//GETTERS & SETTERS
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public int getEnergy() {
			return energy;
		}
		public void setEnergy(int energy) {
			this.energy = energy;
		}
}