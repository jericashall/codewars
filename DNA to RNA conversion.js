// March 14th - 8 kyu   
/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */

function DNAtoRNA(dna) {
    let i= 0;
    let rna = '';
    while (i < dna.length) {
      if(dna[i] === 'T') {
        rna += 'U';
      } else {
        rna += dna[i];
      }
      i++
    }
    return rna
  }
  