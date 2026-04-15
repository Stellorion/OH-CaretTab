// Get references to the button elements
const calculatorBtn = document.querySelector("[data-calculator-btn]");
const unitConverterBtn = document.querySelector("[data-unitConverter-btn]");
const stopwatchBtn = document.querySelector("[data-stopwatch-btn]");
const passGenBtn = document.querySelector("[data-passGen-btn]");

// Get references to the dialog elements
const calculatorDialog = document.querySelector("[data-calculatorDialog]");
const unitConverterDialog = document.querySelector("[data-unitConverterDialog]");
const stopwatchDialog = document.querySelector("[data-stopwatchDialog]");
const passGenDialog = document.querySelector("[data-passGenDialog]");

let currentlyOpenDialog = null;

// Function to close the currently open dialog (if any)
const closeCurrentlyOpenDialog = () => {
  if (currentlyOpenDialog) {
    currentlyOpenDialog.close();
    currentlyOpenDialog = null;
  }
};

// Function to open the dialog
const openDialog = (dialogElement) => {
  dialogElement.show();
  currentlyOpenDialog = dialogElement;
};

// Function to close the dialog
const closeDialog = (dialogElement) => {
  dialogElement.close();
  currentlyOpenDialog = null;
};

// Add click event listener to the calculator button
const calculator = calculatorBtn.addEventListener("click", () => {
  if (currentlyOpenDialog === calculatorDialog) {
    closeDialog(calculatorDialog);
  } else {
    closeCurrentlyOpenDialog();
    openDialog(calculatorDialog);
  }
});

const unitConverter = unitConverterBtn.addEventListener("click", () => {
  if (currentlyOpenDialog === unitConverterDialog) {
    closeDialog(unitConverterDialog);
  } else {
    closeCurrentlyOpenDialog();
    openDialog(unitConverterDialog);
  }
});

const stopwatch = stopwatchBtn.addEventListener("click", () => {
  if (currentlyOpenDialog === stopwatchDialog) {
    closeDialog(stopwatchDialog);
  } else {
    closeCurrentlyOpenDialog();
    openDialog(stopwatchDialog);
  }
});

const passGen = passGenBtn.addEventListener("click", () => {
  if (currentlyOpenDialog === passGenDialog) {
    closeDialog(passGenDialog);
  } else {
    closeCurrentlyOpenDialog();
    openDialog(passGenDialog);
  }
});

export default {
  closeCurrentlyOpenDialog,
  openDialog,
  closeDialog,
  calculator,
  unitConverter,
  stopwatch,
  passGen,
};
