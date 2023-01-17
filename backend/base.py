from flask import Flask, jsonify, json, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
import dateutil.parser as dt


api = Flask(__name__)
cors = CORS(api, resources={r"/api/*": {"origins": "*"}})
api.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
api.app_context().push()
db = SQLAlchemy(api)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    taskName = db.Column(db.Text)
    deadline = db.Column(db.DateTime)


def __str__(self):
    return f'{self.id} {self.taskName} {self.deadline}'


def todo_serializer(todo):
    return {
        'id': todo.id,
        'taskName': todo.taskName,
        'deadline': todo.deadline,
    }


@api.route('/todos')
def retrieve_todos():
    return jsonify([*map(todo_serializer, Todo.query.all())])


@api.route('/addTodo', methods=['POST'])
def add_todo():
    new_todo_data = json.loads(request.data)
    new_todo = Todo(
        taskName=new_todo_data['taskName'], deadline=dt.parse(f"{new_todo_data['deadline']}"))
    db.session.add(new_todo)
    db.session.commit()

    return {'201': 'todo added successfully'}


@api.route('/deleteTodo', methods=['POST'])
def delete_todo():
    del_todo_data = json.loads(request.data)
    Todo.query.filter(Todo.taskName == del_todo_data['taskName'] and Todo.deadline == dt.parse(
        f"{del_todo_data['deadline']}")).delete()
    db.session.commit()
    return {'201': 'todo deleted successfully'}


@api.route('/resetTodos', methods=['POST'])
def reset_todos():
    Todo.query.delete()
    db.session.commit()
    return {'201': 'all todos have been deleted and data has been reset'}
