# DATABASE

## CRUD

###### Create Table

```sqlite
CREATE table Products(
  ID INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY(ID)
)
```

###### Insert

```sqlite
INSERT into products VALUES(1, "pen", 0.80);
```

###### Alter column

```sql
Alter TABLE Products add stock INT
```

###### Update

```sqlite
UPDATE Products
SET stock = 32
where id=1;

UPDATE Products
SET stock = 16
where id=2;

SELECT * FROM Products order by id;

```

###### keys

```sql
CREATE TABLE Kurslar (
    KursID INT PRIMARY KEY,
    KursAdi VARCHAR(50),
    OgretmenID INT,
    FOREIGN KEY (OgretmenID) REFERENCES Ogretmenler(OgretmenID)
);

CREATE TABLE Ogretmenler (
    OgretmenID INT PRIMARY KEY,
    Adi VARCHAR(50),
    Soyadi VARCHAR(50)
);

```



###### Inner join

```sql
SELECT employees.employee_id, employees.first_name, employees.last_name, departments.department_name
FROM employees
INNER JOIN departments ON employees.department_id = departments.department_id;

```





# PostgreSQL

PostgreSQL'de kullanılabilen temel veri tipleri oldukça çeşitlidir. İşte PostgreSQL'deki tüm temel veri tipleri:

1. **Sayısal Veri Tipleri:**
   - `smallint` - 2 byte işaretli tam sayı
   - `integer` - 4 byte işaretli tam sayı
   - `bigint` - 8 byte işaretli tam sayı
   - `decimal` veya `numeric` - Hassas ondalık sayı
   - `real` - 4 byte kayan noktalı sayı
   - `double precision` - 8 byte kayan noktalı sayı
   - `serial` - Otomatik artan tam sayı
   - `bigserial` - Otomatik artan büyük tam sayı

2. **Metinsel Veri Tipleri:**
   - `character varying(n)` veya `varchar(n)` - Değişken uzunluktaki karakter dizisi
   - `character(n)` veya `char(n)` - Sabit uzunluktaki karakter dizisi
   - `text` - Uzun metin dizisi

3. **Zaman ve Tarih Veri Tipleri:**
   - `date` - Tarih
   - `time` - Zaman
   - `timestamp` - Tarih ve zaman
   - `interval` - Zaman aralığı
   - `timestamp with time zone` - Zaman dilimli tarih ve zaman
   - `timestamp without time zone` - Zaman dilimsiz tarih ve zaman
   - `time with time zone` - Zaman dilimli zaman
   - `time without time zone` - Zaman dilimsiz zaman

4. **Boolean Veri Tipi:**
   - `boolean` - True veya false değeri

5. **Dizi Veri Tipi:**
   - `integer[]` - Tam sayı dizisi
   - `text[]` - Metin dizisi

6. **Diğer Veri Tipleri:**
   - `uuid` - UUID (Evrensel Benzersiz Kimlik) 
   - `json` - JSON veri tipi
   - `jsonb` - Binary JSON veri tipi
   - `xml` - XML veri tipi
   - `bytea` - Binary veri
   - `tsvector` - Tam metin arama için vektör
   - `tsquery` - Tam metin arama için sorgu
   - `hstore` - Anahtar-değer çiftleri için bir veri tipi
   - `oid` - Veri nesnesi tanımlayıcısı

7. **Geometri Veri Tipleri:**
   - `point` - 2D nokta
   - `line` - 2D çizgi
   - `lseg` - 2D çizgi segmenti
   - `box` - 2D kutu
   - `path` - 2D yol
   - `polygon` - 2D çokgen
   - `circle` - 2D daire

8. **Network Adres Veri Tipleri:**
   - `inet` - IPv4 veya IPv6 ağ adresi
   - `cidr` - IPv4 veya IPv6 ağ bloğu

9. **Bit Dizisi Veri Tipleri:**
   - `bit(n)` - Belirli bir uzunluktaki bit dizisi
   - `bit varying(n)` - Değişken uzunluktaki bit dizisi

10. **Metin Arama Veri Tipleri:**
    - `tsvector` - Tam metin arama için vektör
    - `tsquery` - Tam metin arama için sorgu

11. **Binary Veri Tipleri:**
    - `bytea` - Binary veri

12. **Para Veri Tipi:**
    - `money` - Para birimi

13. **Renk Veri Tipi:**
    - `color` - Renk

14. **XML Veri Tipi:**
    - `xml` - XML veri tipi

15. **JSON Veri Tipleri:**
    - `json` - JSON veri tipi
    - `jsonb` - Binary JSON veri tipi

16. **UUID Veri Tipi:**
    - `uuid` - UUID (Evrensel Benzersiz Kimlik)

17. **Anahtar-Değer Mağaza Veri Tipi:**
    - `hstore` - Anahtar-değer çiftleri için bir veri tipi

18. **Veri Nesnesi Tanımlayıcı Veri Tipi:**
    - `oid` - Veri nesnesi tanımlayıcısı





## Udemy

```postgresql
create table capitals(
	id serial NOT NULL,
	country varchar(45),
	capital varchar(45),
	PRIMARY KEY(ID)
)
```

```postgresql
create table flags(
	id serial NOT NULL,
	name varchar(45),
	flag varchar(100),
	PRIMARY KEY(ID)
)
```





#### ONE TO ONE

```postgresql
CREATE TABLE student 
( id SERIAL PRIMARY KEY,
	first_name TEXT, 
	last name TEXT
);

CREATE TABLE contact detail (
	id INTEGER REFERENCES student (id) UNIQUE, 
  tel TEXT, 
  address TEXT);
```



#### ONE TO MANY

```postgresql
CREATE TABLE student ( 
  id SERIAL PRIMARY KEY, 
  first_name TEXT, 
  last name TEXT
);
CREATE TABLE homework submission ( 
  id SERIAL PRIMARY KEY, 
  mark INTEGER,
	student_id INTEGER REFERENCES student (id)
);
```

