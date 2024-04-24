package data1700oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private BillettRepository repository;

    @PostMapping("/lagre")
    public void lagreBillett(Billett billett) {
        repository.lagreBillett(billett);
    }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return repository.hentAlleBilletter();
    }
    @GetMapping("/hentEnBillett")
    public Billett hentEnBillett(int id){
        return repository.hentEnBillett(id);
    }

    @PostMapping("/endreEnBillett")
    public void endreEnBillett(Billett billett){
        repository.endreEnBillett(billett);
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        repository.slettAlleBilletter();
    }

    @GetMapping("/slettEnBillett")
    public void slettEnBillett(int id){
        repository.slettEnBillett(id);
    }



    @GetMapping("/hentBillett")
    public List<Billett> hentAlleBilletter() {
        return repository.hentAlleBilletter();
    }

    @GetMapping("/slettBillett")
    public void slettBillett() {
        repository.slettAlleBilletter();
    }
}
