CREATE TABLE Pessoas ( 
	Nomes                TEXT     ,
	ID                   INTEGER NOT NULL    ,
	CONSTRAINT unq_Pessoas_ID UNIQUE ( ID )
 );

CREATE TABLE Realizações ( 
	Projetos             TEXT     ,
	ID                   INTEGER NOT NULL    ,
	FOREIGN KEY ( ID ) REFERENCES Pessoas( ID )  
 );

CREATE TABLE Curiosidades ( 
	Hobbies              TEXT     ,
	ID                   INTEGER NOT NULL    ,
	FOREIGN KEY ( ID ) REFERENCES Pessoas( ID )  
 );

CREATE TABLE Experiências ( 
	"Nome das Empresas"  TEXT     ,
	ID                   INTEGER NOT NULL    ,
	FOREIGN KEY ( ID ) REFERENCES Pessoas( ID )  
 );

CREATE TABLE Formações ( 
	Cursos               TEXT     ,
	ID                   INTEGER NOT NULL    ,
	FOREIGN KEY ( ID ) REFERENCES Pessoas( ID )  
 );
