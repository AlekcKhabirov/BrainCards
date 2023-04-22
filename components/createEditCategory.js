import { createElement } from "../helper/createElement.js";

const TITLE ='введите название категории';

export const createEditCategory =(app)=>{
    const editCategory =createElement('section',
    {
        className:'edit section-offset',
    }
    );

    const container =createElement('div',{
        className:'container edit__container',
    });

    const title = createElement('h2',{
        className:'edit__title',
        contentEditable:true,
        title:'Можно редактировать',
    });

    const table = createElement('table',{
        className:'edit__table table',
    });

    const thead = createElement('thead');
    const trThead = createElement('tr');

    const tableHeadCellMain = createElement('th',{
        className:'table__cell',
        textContent:'main',
    });
    const tableHeadCellSecond = createElement('th',{
        className:'table__cell',
        textContent:'second',
    });
    const tableHeadCellEmpty = createElement('th',{
        className:'table__cell',
    });

    const tBody = createElement('tbody');

    const btnWrapper = createElement('div',{
        className:'edit__button-wrapper',
    });
    const btnAddRow = createElement('button',{
        className:'edit__btn edit__add-row',
        textContent:'добавить пару',
    });
    const btnSave = createElement('button',{
        className:'edit__btn edit__save',
        textContent:'Сохранить категорию',
    });
    const btnCancel = createElement('button',{
        className:'edit__btn edit__cancel"',
        textContent:'Отмена',
    });

    

    editCategory.append(container);
    table.append(thead,tBody);
    thead.append(trThead);
    trThead.append(tableHeadCellMain,tableHeadCellSecond,tableHeadCellEmpty);
    btnWrapper.append(btnAddRow.btnSave,btnCancel);
    container.append(title,table,btnWrapper);

const createTrCell = (dataArr)=>{
        const tr = createElement('tr');
        const tableCellMain = createElement('td',{
            className:'table__cell table__cell_one',
            contentEditable:true,
            textContent:'dataArr[0]',
        });
        const tableCellSecond = createElement('td',{
            className:'table__cell table__cell_two',
            contentEditable:true,
            textContent:'dataArr[1]',
        });
            
        const tableCellDel = createElement('th',{
            className:'table__cell',
        });
        const delRow = createElement('button',{
            className:'table__del',
            textContent:'x',
        });

        delRow.addEventListener('click',()=>{
            if(confirm('вы уверены что хотите удалить строку'))
                {tr.remove();}
            }
        );

        tableCellDel.append(delRow);
        tr.append(tableHeadCellMain,tableHeadCellSecond,tableCellDel);

        return tr;
    };
        
    const clearTitle =()=>{
        if(title.textContent ===TITLE){
            title.textContent ='';
        }
    };
    const checkTitle =()=>{
        if(title.textContent ===''){
            title.textContent =TITLE;
        }
    };
    title.addEventListener('focus',clearTitle);
    title.addEventListener('blur',checkTitle);

    const mount =(data={title:TITLE,pairs:[]})=>{
        tBody.textContent='';
        title.textContent =data.title;

        if(title.textContent===TITLE){
            title.classList.add('edit__title_change');
        }else{
            title.classList.remove('edit__title_change');
        }

        const rows =data.pairs.map(createTrCell);

        tBody.append(...rows);
    };

    const unmount =()=>{

    };
    return {mount,unmount};
};