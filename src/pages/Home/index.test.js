import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import { DataProvider } from "../../contexts/DataContext";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );
  // attaendre que le formuliare soit chargé
     await screen.findByText("Email");
  //   await screen.findByText("Nom");
  //   await screen.findByText("Prénom");
  //   await screen.findByText("Personel / Entreprise");
  // });
  const emailField = screen.getByLabelText("Email");
  const nameField = screen.getByLabelText("Nom");
  const firstNameField = screen.getByLabelText("Prénom");
  const typeField = screen.getByLabelText("Personnel / Entreprise"); 

  expect(emailField).toBeInTheDocument();
    expect(nameField).toBeInTheDocument();
    expect(firstNameField).toBeInTheDocument();
    expect(typeField).toBeInTheDocument();
  });



  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(
        <DataProvider>
          <Home />
        </DataProvider>
      );
      // fireEvent(
      //   await screen.findByText("Envoyer"),
      //   new MouseEvent("click", {
      //     cancelable: true,
      //     bubbles: true,
      // //   })
      // );
      // await screen.findByText("En cours");
      // await screen.findByText("Message envoyé !");
      // const submitButton = screen.getByText("Envoyer");
      // fireEvent.click(submitButton);
      
      // // Attendre le message de succès
      // const successMessage = await screen.findByText("Message envoyé !");
      // expect(successMessage).toBeInTheDocument();


       // Attendre que le formulaire soit chargé
       await screen.findByText("Email");
// Remplir les champs requis 
  fireEvent.change(screen.getByLabelText("Email"), {
    target: { value: "test@exemple.com" },
});
  fireEvent.change(screen.getByLabelText("Nom"), {
    target: { value: "Test Nom" }
})
  fireEvent.change(screen.getByLabelText("Prénom"), {
   target: { value: "Test Prenom" }
});
// Cliquer sur le bouton
    const submitButton = screen.getByText("Envoyer");
    fireEvent.click(submitButton);

// Attend le message de succès
    const successMessage = await screen.findByText("Message envoyé !");
    expect(successMessage).toBeInTheDocument();
});
});
});





describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // render(<Home />);
    
    // to implement
  })
  it("a list a people is displayed", () => {
    // to implement
  })
  it("a footer is displayed", () => {
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
