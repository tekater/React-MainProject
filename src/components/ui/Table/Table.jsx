/**
 * Компонент таблица.
 * @param {object} props - Свойства компонента.
 * @param {Array} props.headers - Названия столбцов в шапке таблицы.
 * @param {Array} props.data - Содержимое таблицы.
 * @param {function} props.handleEdit - Функция для обработки редактирования (необязательный).
 * @param {function} props.handleDelete - Функция для обработки удаления (необязательный).
 * @returns {JSX.Element} Элемент JSX.
 */

const Table = ({ data, headers, handleEdit, handleDelete }) => {
    return(
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        {headers.map((head)=> {    
          return(      
            <th key={head?.key} scope="row" className="px-6 py-3">{head?.title}</th>
        )})} 
            </tr>
      </thead>
        <tbody>
          {data.map((item)=> {
            return(      
              <tr key={item?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <Row row = {item} />         
                <th scope="row" className="px-6 py-4">
                  {(handleEdit || handleDelete) && <div className="flex justify-between">
                    {handleEdit && <button id={item.id} onClick={handleEdit}>📝</button>}
                    {handleDelete && <button id={item.id} onClick={handleDelete}>🗑️</button>}
                  </div>}
                </th>
              </tr>
        )})}          
        </tbody>
    </table>
</div>
)}

const Row = ({ row }) => {
  const cellsData = Object.keys(row).map((key)=>[row[key]]).slice(0,3);
  console.log(row.id);
  return(
    <>
      {cellsData.map((cell, index)=>{
        return(
        <th key = {index} scope="row" className="px-6 py-4">{cell}</th>
      )})}
    </>
  )}

export default Table;