import { create } from "zustand";
/**
 * @param {Object} paymentInfo - Иформация об оплате (Объект).
 * @returns {setPaymentInfo} - Функция сохранения информации об оплате.
 * @returns {getPaymentInfo} - Функция функция получения информаци об оплате.
 */

const usePayment = create((set, get) => {
  let paymentInfo;

 /**
   * Функция сохранения информации об оплате.
   * @param {Object} info - Получаемая информация об оплате.
   */
  const setPaymentInfo = (info) =>{
    paymentInfo = info;
  }

/**
   * Функция сохранения информации об оплате.
   * @return {Object} Возвращаем объект с информацие об оплате.
   */
  const getPaymentInfo = () =>{
    return paymentInfo;
  }

return {
  setPaymentInfo,
  getPaymentInfo
};

});

export default usePayment;