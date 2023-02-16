// создаем вручную объект с бригадами, звеньями и работниками в них
let obj = {
  brigade: {
    brigade_id: 837,
    brigade_title: "Бригада",
    brigade_description: "Бригада",

    chanes: {
      2340: {
        chane_id: 2340,
        chane_title: "Звено 1",
        workers: {
          10007724: {
            worker_id: 10007724,
            worker_name: "Иванов Иван Иванович",
            mine_id: 1,
          },
          10007725: {
            worker_id: 10007725,
            worker_name: "Иванов Сергей Иванович",
            mine_id: 1,
          },
          10007726: {
            worker_id: 10007726,
            worker_name: "Иванов Петр Иванович",
            mine_id: 1,
          },
        },
      },
      2341: {
        chane_id: 2341,
        chane_title: "Звено 2",
        workers: {
          10007727: {
            worker_id: 10007727,
            worker_name: "Сидорров Иван Иванович",
            mine_id: 2,
          },
          10007728: {
            worker_id: 10007728,
            worker_name: "Сидорров Сергей Иванович",
            mine_id: 1,
          },
          10007729: {
            worker_id: 10007729,
            worker_name: "Сидорров Петр Иванович",
            mine_id: 2,
          },
          10007730: {
            worker_id: 10007730,
            worker_name: "Сидорров Георгий Иванович",
            mine_id: 3,
          },
        },
      },
    },
  },
};

let countWorkersByMine = {};

// пробегаемся по бригадам, звеньям и работникам, которые содержатся в объекте 
for (let brigadeId in obj) {
  let brigade = obj[brigadeId];

  // удаление свойства
  delete brigade.brigade_description;

  for (let chaneId in brigade.chanes) {
    let chane = brigade.chanes[chaneId];

    for (let workerId in chane.workers) {
      let worker = chane.workers[workerId];
      let mineId = worker.mine_id;

      // добавление свойства
      worker.role = "Шахтёр";

      // группировка работников по шахтам
      if (!countWorkersByMine[mineId]) {
        countWorkersByMine[mineId] = {};
      }

      countWorkersByMine[mineId][workerId] = 1;
    }
  }
  console.log("brigade ", brigade);
}

console.log("countWorkersByMine ", countWorkersByMine);
