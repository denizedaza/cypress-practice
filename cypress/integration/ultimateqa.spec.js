describe("ultimateqa website", () => {
  beforeEach(() => {
    cy.visit("https://ultimateqa.com/automation");

  });

  it("should navigate to the main UltimateQA Automation Practice Page'", () => {
    cy.get('span').
      contains("Use your skills to learn how to automate different scenarios")
  });

  context.skip("navigating to the 'Big Page with many elements'", () => {
    beforeEach(() => {
      cy.get('a').contains("Big page with many elements").click();
    });

    it("should navigate to the third row, bottom button in the 'Section of Buttons'", () => {
      // cy.get('a').contains("Big page with many elements").click();
      cy.contains("Section of Buttons");
      cy.get('.et_pb_button_8_wrapper > .et_pb_button').trigger('hover');
    });

    it("should click the fourth Twitter link in the first row of the 'Section of Social Media Follows'", () => {
      // cy.get('a').contains("Big page with many elements").click();
      cy.contains("Section of Social Media Follows");
      cy.get('.et_pb_social_media_follow_network_4 > .icon').should('have.class', 'icon et_pb_with_border');
    });

    it("should fill out the first form in the 'Section of Random Stuff'", () => {
      cy.contains("Section of Random Stuff");
      cy.get('input[id=et_pb_contact_name_0]').type("test", { delay: 10 });
      cy.get('input[id=et_pb_contact_email_0]').type("test@test.com", { delay: 10 });
      cy.get('textarea[id=et_pb_contact_message_0]').type("testabaloo", { delay: 10 });
      // cy.get('[data-test-id="test-example"]')
      cy.get('span[class="et_pb_contact_captcha_question"]').contains("7 + 9");

      cy.get('input[name="et_pb_contact_captcha_0"]').type("16");
      cy.get('button[name="et_builder_submit_button"]').first().click();
    });

    it("should navigate to the sample Toggle button and activate it", () => {
      cy.get('.et_pb_toggle_title').click();
      cy.wait(2000);
      cy.contains("Inside of toggle");
    })
  });

  context.skip("navigating to the 'Fake landing page'", () => {
    beforeEach(() => {
      cy.get('a').contains("Fake Landing Page").click();
      cy.wait(3000);
      cy.contains("Learn to Code Websites, Apps & Games").should('be.visible');
    });

    it("should locate lower sections of page", () => {
      cy.get('.et_pb_column_2').scrollIntoView().should('be.visible');
    });

    it("should to to View Courses", () => {
      cy.get('.et_pb_column_0 > .et_pb_button_module_wrapper > .et_pb_button').click();
    })
  });

  context("navigating to the practice page with simple elements to interact with", () => {
    beforeEach(() => {
      cy.get('a').contains("Interactions with simple elements").click();
      cy.wait(1000);
      cy.contains("Feel free to practice your test automation on these elements.");
    });

    //section 1
    it.skip("should find and click the first 'Click Me!' button", () => {
      cy.get('button[id="button1"]').contains("Click Me!").click().get('.icon').should('be.visible');
    });

    //section 2
    it("should navigate to the button example using ID", () => {
      cy.get('#idExample').click()
        .get('.entry-title').should('be.visible');
      ;
    });

    it("should navigate to the link example using text", () => {
      cy.get('a').contains("Click me using this link text!").click()
        .get('.entry-title').should('be.visible');
    });

    it("should navigate to the button example using className", () => {
      cy.get('.buttonClass').click()
        .get('.entry-title').should('be.visible');
    });

    it("should navigate to the button example using Name", () => {
      cy.get('.buttonClass').click()
        .get('.entry-title').should('be.visible');
    });

    //section 3
    //simple controls
    it("should navigate to the button under Simple Controls", () => {
      cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        .get('.entry-title').should('be.visible');
    });

    it("should navigate to the link under Simple Controls", () => {
      cy.get('#simpleElementsLink').click()
        .get('.entry-title').should('be.visible');
    });

    it("should fill out the email form under Simple Controls", () => {
      cy.get('input[name="et_pb_contact_name_0"]').type("test")
      .get('input[name="et_pb_contact_email_0"]').type("test@email.com")
      .get('button[name="et_builder_submit_button"]')
      .click()
      .wait(2000)
      .get('.et-pb-contact-message > p').should('be.visible')
    });

    it("should select each radio button", () => {
      cy.get('input[value="male"]').check().should('be.checked');
      
      cy.get('input[value="female"]').check().should('be.checked');

      cy.get('input[value="male"]').should('not.be.checked');

      cy.get('input[value="other"]').check().should('be.checked');

      cy.get('input[value="female"]').should('not.be.checked');

      cy.get('input[value="male"]').check().should('be.checked');

      cy.get('input[value="other"]').should('not.be.checked');
    });

    it("should select the checkboxes and validate", () => {
      cy.get('input[value="Bike"]').check().should('be.checked');

      cy.get('input[value="Car"]').check().should('be.checked');

      cy.get('input[value="Bike"]').uncheck().should('not.be.checked');

      cy.get('input[value="Car"]').uncheck().should('not.be.checked');
    });

    it("should select the dropdown and validate", () => {
      cy.get('select').select('Opel');

      cy.get('select option:selected').should('have.text', 'Opel');
    });

    it.only("should select the appropriate tabs and validate contents", () => {
      cy.get('li.et_pb_tab_0').contains("Tab 1").click();

      cy.get('.et_pb_all_tabs > .et_pb_tab_0').should('have.class', 'et-pb-active-slide');

      cy.get('li.et_pb_tab_1').contains("Tab 2").click();

      cy.get('.et_pb_all_tabs > .et_pb_tab_1').should('have.class', 'et-pb-active-slide');
    })
  });

});