# Heart Counter Django Project

This project is a simple Django web application that demonstrates a heart counter. Users can click a heart button to increment a counter, and the count is persisted using a PostgreSQL database.

## Prerequisites

Before you begin, ensure you have the following installed:

* **Python 3.8+:** Download and install Python from [python.org](https://www.python.org/).
* **pip:** Python's package installer.
* **PostgreSQL:** Download and install PostgreSQL from [postgresql.org](https://www.postgresql.org/).
* **Git (Optional):** If you plan to clone the repository. Download and install Git from [git-scm.com](https://git-scm.com/).

## Getting Started

1.  **Clone the Repository (Optional):**

    ```bash
    git clone <repository_url>
    cd heart_counter
    ```

2.  **Create a Virtual Environment:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Linux/macOS
    venv\Scripts\activate    # On Windows
    ```

3.  **Install Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4.  **Create a `.env` File:**

    * In the root directory of the project (the same directory as `manage.py`), create a file named `.env`.
    * Add your database credentials and Django `SECRET_KEY` to the `.env` file:

        ```
        DB_NAME=your_database_name
        DB_USER=your_database_user
        DB_PASSWORD=your_database_password
        DB_HOST=your_database_host
        DB_PORT=your_database_port
        SECRET_KEY=your_django_secret_key
        ```

    * Replace the placeholder values with your actual database and secret key.
    * **Important:** Do not commit your `.env` file to your Git repository. Add `.env` to your `.gitignore` file.

5.  **Run Migrations:**

    ```bash
    python manage.py makemigrations hearts_collector
    python manage.py migrate
    ```

6.  **Run the Development Server:**

    ```bash
    python manage.py runserver
    ```

7.  **Access the Application:**

    * Open your web browser and go to `http://127.0.0.1:8000/`.

## Creating the `.env` File

* The `.env` file is used to store sensitive information, such as database credentials and your Django `SECRET_KEY`, outside of your code.
* This prevents these values from being accidentally committed to your Git repository.
* Follow these guidelines when creating your `.env` file:
    * Store it in the root directory of your Django project.
    * Use the format `VARIABLE_NAME=value` for each variable.
    * Do not include any spaces around the `=` sign.
    * Add `.env` to your `.gitignore` file to prevent it from being committed.
    * Generate a secure secret key using the following python code.
        ```python
        import secrets
        print(secrets.token_urlsafe(50))
        ```

## Deployment

TBC 

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

[Your License (e.g., MIT License)]