let mobiles = {
    Samsung: {
      SamsungA10: {
          name: "Samsung S22 ",
          ram: "4gb",
          rom: "128gb",
          camera: "13MP",
          price: "24,000 PKR"
      },
      SamsungA20: {
          name: "Samsung S22 Ultra",
          ram: "8gb",
          rom: "128gb",
          camera: "28MP",
          price: "28,000"
      },
      SamsungA30: {
          name: "Samsung A30",
          ram: "4gb",
          rom: "64gb",
          camera: "50MP",
          price: "20,000"
      }
  },
  IPhone: {
      IPhone11: {
          name: "IPhone11",
          ram: "8gb",
          rom: "128gb",
          camera: "52MP",
          price: "100,500"
      },
      IPhone12: {
          name: "IPhone12",
          ram: "4gb",
          rom: "64gb",
          camera: "19MP",
          price: "180,000"
      },
      IPhone13: {
          name: "IPhone13",
          ram: "4gb",
          rom: "128gb",
          camera: "24MP",
          price: "203,000"
      }
  },
  Oppo: {
      OppoV20: {
          name: "OppoV20",
          ram: "8gb",
          rom: "128gb",
          camera: "64MP",
          price: "54,999"
      },
      OppoF19: {
          name: "OppoF19",
          ram: "4gb",
          rom: "64gb",
          camera: "48MP",
          price: "30,999"
      },
      OppoF11: {
          name: "OppoF11",
          ram: "4gb",
          rom: "64gb",
          camera: "88MP",
          price: "39,999"
      }
  },
  Vivo: {
      VivoY20: {
          name: "VivoY20",
          ram: "2gb",
          rom: "32gb",
          camera: "13MP",
          price: "20,999"
      },
      VivoY21: {
          name: "VivoY21",
          ram: "4gb",
          rom: "64gb",
          camera: "13MP",
          price: "43,999"
      },
      VivoY55: {
          name: "VivoY55",
          ram: "8gb",
          rom: "128gb",
          camera: "50MP",
          price: "64,999"
      }
  },
  };
  
  let brand = document.getElementById("Mobile");
  let model = document.getElementById("Mobilemodel");
  let data=document.getElementById("output");
  
  let allphones = Object.keys(mobiles);
  for (var i = 0; i < allphones.length; i++) {
    brand.innerHTML += `<option>${allphones[i]}</option>`;
  }
  
  function selectPhone() {
    let selectedBrand = brand.value;
  let allModels = Object.keys(mobiles[selectedBrand]);
    model.innerHTML = "";
    for (var i = 0; i < allModels.length; i++) {
      model.innerHTML += `<option value="${allModels[i]}">${allModels[i]}</option>`;
    }
  }
  
  function selectPhoneModel() {
    let a =Object.keys(mobiles[brand.value][model.value]);
    data.innerHTML=""
    for(var i=0; i<a.length;i++){
      data.innerHTML += `${a[i]} = ${mobiles[brand.value][model.value][a[i]]} <br>`
    }
  }