package data1700oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {
    @Autowired
    //objekte db for å akselesere databasen, må autowired.
    private JdbcTemplate db;
//metoder
    //lagrebillet metode
    public void lagreBillett(Billett innbillett) {
        String sql = "INSERT INTO Billett (filmNavn, antallBilletter, fornavn, etternavn, telefonNR, epost) VALUES(?,?,?,?,?,?)";
        //først sql så parameterne
        db.update(sql, innbillett.getFilmNavn(), innbillett.getAntallBilletter(), innbillett.getFornavn(), innbillett.getEtternavn(), innbillett.getTelefonNr(), innbillett.getEpost());
    }

    //metode for å hente ut billettene
    public List<Billett> hentAlleBilletter() {
        String sql = "SELECT * FROM Billett";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }
//slette metode
    public void slettAlleBilletter() {
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }
    //Slette en billett
    public void slettEnBillett(int id) {
        String sql = "DELETE FROM Billett WHERE id=?";
        db.update(sql,id);
    }
    //henteEnBillett
    public Billett hentEnBillett(int id) {
        Object[] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Billett WHERE id=?";
        Billett enBillett = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Billett.class));
        return enBillett;
    }
//endre en Billett
    public void endreEnBillett(Billett billett){
        String sql = "UPDATE Billett SET filmNavn=?, antallBilletter=?, fornavn=?, etternavn=?, telefonNr=?, epost=? where id=?";
        db.update(sql,billett.getFilmNavn(),billett.getAntallBilletter(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefonNr(), billett.getEpost(), billett.getId());
    }


}

