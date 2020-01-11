var elements = ["N", "N_NO3", "N_NH4", "P", "S", "K", "Ca", "Mg", "Fe", "B", "Zn", "Cu", "Mn", "Mo"];
var fertilizers = [
    {
        "name": "Акварин хвойный", "desc": "N: 3%, P2O5: 11%, K2O: 35%, MgO: 4%, S: 9%, Fe (ДТПА) – 0,054; Zn (ЭДТА) – 0,014; Cu (ЭДТА) – 0,01; Mn (ЭДТА) – 0,042; Mo – 0,004; B – 0,02 ",
        "N_NH4": 0, "N_NO3": 0.03, "P": 0.048, "K": 0.2906, "Mg": 0.02412, "S": 0.09, "Fe": 0.00054, "Zn": 0.00014, "Cu": 0.0001, "Mn": 0.00042, "Mo": 0.00004, "B": 0.0002, "solublity25": 100
    },
    { "name": "Ca(NO3)2 буйский, N:14.9%, CaO: 27%", "Ca": 0.193, "N_NO3": 0.149 },
    { name: "KNO3", "K": 0.387, "N_NO3": 0.1385, "solublity25": 36 },
    { name: "MgSO4*7H2O", "Mg": 0.0986, "S": 0.13, "solublity25": 70 },
    { name: "Аммиачная селитра", "N_NO3": 0.175, "N_NH4": 0.175, "solublity25": 70 },
    {
        "name": "ADOB® Универсал Микро Комплекс", "desc": "Железо (Fe) – 4% хелат EDTA, Марганец (Mn) – 3% хелат EDTA, Цинк (Zn) – 3% хелат EDTA, Медь (Cu) – 2% хелат EDTA, Бор (B) – 0.6%, Молибден (Mo) – 0.1%",
        "Fe": 0.04, "Zn": 0.03, "Cu": 0.02, "Mn": 0.03, "Mo": 0.001, "B": 0.006, "solublity25": 100
    }
];

var atomic_weights = { "H": 1, "K": 39.1, "N": 14, "N_NO3": 14, "N_NH4": 14, "O": 16, "Ca": 40.078, "Fe": 56, "P": 30.974, "Mg": 24.305, "S": 32, "Zn": 65.39, "Mo": 95.94, "Cu": 3.546, "B": 10.811, "Mn": 54.938 };
// заменить на элементс, добавить валентность к каждому элементу

var ions = { "SO4": -2, "PO4": -3, "SO3": -1, "Mn": 2, "Cu": 2, "Zn": 2, "Mg": 2, "Ca": 2 };



// акварин - 10г, КС - 10г, СМ - 3г 