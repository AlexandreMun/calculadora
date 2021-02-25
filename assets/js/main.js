function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    
    inicia() {
      alert('Oi, iniciei.');
      this.cliqueBotoes();
      this.enterPressed();
    },

    enterPressed() {
      this.display.addEventListener('keyup', e => { // Arrow function não ignora o this da função
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;
      
      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta Inválida');
          return this.clearDisplay();
          // return;
        }

        this.display.value = String(conta);
      } catch (e) {
          alert('Conta Inválida');
          return this.clearDisplay();
          // return;
      }
    },
    
    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      // this -> calculadora
      document.addEventListener('click', function(e) {
        const element = e.target;

        if (element.classList.contains('btn-num')){
          this.btnParaDisplay(element.innerText);
        }

        if (element.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (element.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if (element.classList.contains('btn-eq')) {
          this.realizaConta();
        }

      }.bind(this)); // Usa o this da função
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  };
}

const calduladora = criaCalculadora();
calduladora.inicia();
