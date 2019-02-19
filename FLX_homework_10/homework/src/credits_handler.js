function userCard(creditCardKey) {
  const data = {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: creditCardKey
  };
  const taxes = 0.005;

  function historyLog(operationType, credits) {
    data.historyLogs.push({
      operationType: operationType,
      credits: credits,
      operationTime: new Date().toISOString()
    });
  }

  return {
    getCardOptions: function() {
      return data;
    },
    putCredits: function(amount) {
        data.balance += amount;
        historyLog('Received credits', amount);
      },
    takeCredits: function(amount) {
        if(amount > data.balance || amount > data.transactionLimit) {
          console.error('The amount you are going to take exceeds the possible maximum');
        } else {
          data.balance -= amount;
          historyLog('Withdrawal of credits', amount);
        }
      },
    setTransactionLimit: function(amount) {
        data.transactionLimit = amount;
        historyLog('Transaction limit change', amount);
      },
    transferCredits: function(amount, card) {
        const amountWithTax = amount + amount * taxes;
        if (amountWithTax > data.balance || amountWithTax > data.transactionLimit) {
          console.error('The amount you are going to transfer exceeds the possible maximum');
        } else {
          card.putCredits(amount);
          data.balance -= amountWithTax;
          historyLog('Withdrawal of credits', amountWithTax);
        }
      }
    };
  }
  class UserAccount {
    constructor(name) {
      this.name = name;
      this.cards = [];
      this.maxCardQuantity = 3;
    }

    addCard(creditCardKey) {
      if(this.cards.length < this.maxCardQuantity) {
        this.cards.push(userCard(creditCardKey));
      } else {
        console.error('You have already reached cards quantity limit');
      }
    }

    getCardByKey(creditCardKey) {
      return this.cards[creditCardKey - 1];
    }
  }
