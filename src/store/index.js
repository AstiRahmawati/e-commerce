import { createStore } from "vuex";
import auth from "./modules/auth";
import merk from "./modules/merk";
import product from "./modules/product";
import kategori from "./modules/kategori";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        merk,
        kategori,
        product
    },
});

export default store;