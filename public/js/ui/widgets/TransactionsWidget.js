/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

const e = require("express");

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (element) {
      this.element = element;
      this.registerEvents();
    } else {
      throw new Error('Пустой элемент!');
    }
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const income = this.element.querySelector('.create-income-button');
    const expense = this.element.querySelector('.create-expense-button');

    income.addEventListener('click', () => {
      App.getModal('newIncome').open();
    });

    expense.addEventListener('click', () => {
      App.getModal('newExpense').open();
    });
  }
}
