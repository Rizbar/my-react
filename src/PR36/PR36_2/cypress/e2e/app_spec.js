// cypress/e2e/app_spec.js

describe('Aplikasi React - User Data dan Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // sesuaikan dengan port dev server
  });

  it('Harus mengambil 10 data user dari API dan tampil di halaman', () => {
    // Klik tombol Ambil User
    cy.get('.fetch-user-button').click();

    // Verifikasi bahwa ada 10 user
    cy.get('.user-1').should('exist'); // memastikan setidaknya satu data muncul
    cy.get('div[id^="user-"]').should('have.length', 10);
  });

  it('Harus mengisi form dan berhasil submit user', () => {
    // Isi form
    cy.get('.name-input').type('Test Name');
    cy.get('.email-input').type('test@example.com');
    cy.get('.phone-input').type('08123456789');

    // Klik tombol buat user
    cy.get('.post-user-button').click();

    // Verifikasi pesan berhasil
    cy.get('.success-response').should('contain', 'Berhasil membuat user!');
  });

  it('Harus menampilkan error jika submit kosong', () => {
    // Kosongkan form dan klik tombol
    cy.get('.post-user-button').click();

    // Verifikasi pesan error
    cy.get('.fail-response').should('contain', 'Masukan data user!');
  });
});