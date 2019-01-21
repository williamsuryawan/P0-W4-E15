function highestScore(arr) {
    var nilai = {};
    for(i=0; i < arr.length; i++){
      var nama = arr[i].name;
      var skor = arr[i].score;
      var kelas = arr[i].class;
  
      if(nilai[kelas] === undefined){
        var siswa={};
        siswa.name = nama;
        siswa.score = skor;
        nilai[kelas] = siswa;
      }
      else if(nilai[kelas].score < skor){
        var siswa = {};
        siswa.name = nama;
        siswa.score = skor;
        nilai[kelas] = siswa;
      }
    }
    return nilai;
}


// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}