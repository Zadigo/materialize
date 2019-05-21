FROM python:3

ENV PYTHONUNBUFFERED 1

ENV PYTHONDONTWRITEBYTECODE 1

RUN mkdir /app

WORKDIR /app/

COPY Pipfile Pipfile

COPY Pipfile.lock Pipfile.lock

RUN pip install pipenv

RUN pipenv install --deploy --system

COPY . /app

ENTRYPOINT [ "python", "wsgi.py" ]
