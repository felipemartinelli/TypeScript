import { Pessoa } from "./Pessoa";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

var p:Pessoa;

p = new Pessoa();
p.setNumRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");

console.log(p);

var a: Aluno;
a = new Aluno();
a.setNumRegistro(1235);
a.setNome("Isidro de Almeida Botelho");
a.setEmail("isi@isidrocorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Java Full Stack Galaxy Master");
a.setAnoMatricula(2019);
console.log(a);

var pf = new Professor();

pf.setNumRegistro(3333);
pf.setNome("Felipe");
pf.setEmail("felipe@gmail.com");
pf.setTelefone("+55 11 45648-5641");
pf.setvalorHora(1000.00);
pf.setNumHoras(8);
pf.setAreaFormacao("Programacao");
console.log(pf);


