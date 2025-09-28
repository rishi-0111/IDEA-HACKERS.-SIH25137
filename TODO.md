# TODO List for Login/Register Web App with Blockchain QR

- [x] Modify blockchian.py: Add save_chain and load_chain methods using pickle. Update __init__ to load chain on init, add_block to save after adding.
- [x] Install Flask: Run pip install flask
- [x] Create app.py: Flask app with routes for / (index), /register (GET/POST), /login (GET/POST). Import blockchain, use templates.
- [x] Create templates/index.html: Page with links to register and login.
- [x] Create templates/register.html: Form with radio for local/foreigner, inputs for name, emergency, id. JS to toggle id field.
- [x] Create templates/login.html: Form for id input.
- [x] Create templates/success.html: Page to display QR after register.
- [x] Run python app.py to test the app.
