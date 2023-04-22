import { createCategory } from "../components/createCategories.js";
import { createEditCategory } from "../components/createEditCategory.js";
import { createHeader } from "../components/createHeader.js";
import { createElement } from "../helper/createElement.js";
import { fetchCategories } from "./service/serviceApi.js";


const  initApp=async()=>{
    const headerParrent = document.querySelector('.header');
    const app= document.querySelector('#app');

    const headerObj=createHeader(headerParrent);
    //console.log('headerObj',headerObj);
    const categoryObj= createCategory(app);
    console.log('categoryObj:',categoryObj);
    const editCategoryObj = createEditCategory(app);

    const allSectionUnmount = ()=>{
        [categoryObj.editCategoryObj].forEach(obj=>obj.unmount());
        //categoryObj.unmount();
        //editCategoryObj.unmount();

    };
    
    //console.log('categories:',categories);
    

    const returnIndex=async e=>{
        e?.preventDefault();
        allSectionUnmount();

        const categories= await fetchCategories();

        if(categories.error){
        app.append(createElement('p',{
            className: 'server-error',
            textContent:'ошибка сервера',
        }));
        return;
    }

    categoryObj.mount(categories);
    };

    returnIndex();

    headerObj.headerLogoLink.addEventListener('click',
    returnIndex);

    headerObj.headerBtn.addEventListener('click',()=>{
        allSectionUnmount();
        //categoryObj.unmount();
        headerObj.updateHeaderTitle('новая категория');
        editCategoryObj.mount();
    }
    ); 
    //headerObj.updateHeaderTitle('Категории+');
};

initApp();

