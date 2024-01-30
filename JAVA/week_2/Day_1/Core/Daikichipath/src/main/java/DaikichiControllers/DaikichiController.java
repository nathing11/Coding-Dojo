package DaikichiControllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
	@GetMapping("/")
	public String Home() {
		return "welcome";
	}
	@GetMapping("/travel/{city}")
	public String showLesson(@PathVariable("city") String city){
		return "Congratulations! You will soon travel to "+ city + "!";
	}
	@GetMapping("/lotto/{id}")
	public String number(@PathVariable("id") int id) {
		if(id % 2 ==0) {
			return "You will take a grand journey in the near future, but be weary of tempting offers"+id;
		}
		else {
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends"+id;
		}
	}
}

