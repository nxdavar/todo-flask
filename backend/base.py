from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

api = Flask(__name__)
api.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
api.app_context().push()
db = SQLAlchemy(api)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.Text)
    deadline = db.Column(db.DateTime)


def __str__(self):
    return f'{self.id} {self.task} {self.deadline}'


def todo_serializer(todo):
    return {
        'id': todo.id,
        'task': todo.task,
        'deadline': todo.deadline,
    }


@api.route('/todos')
def my_profile():
    return jsonify([*map(todo_serializer, Todo.query.all())])
