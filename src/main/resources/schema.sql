CREATE TABLE Billett
(
    id              INTEGER AUTO_INCREMENT NOT NULL,
    filmNavn        VARCHAR(255),
    antallBilletter INTEGER,
    fornavn         VARCHAR(255),
    etternavn       VARCHAR(255),
    telefonNR          VARCHAR(255),
    epost           VARCHAR(255),
    PRIMARY KEY (id)
);