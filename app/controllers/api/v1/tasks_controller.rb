class Api::V1::TasksController < ApplicationController
  def index
    all_tasks = Task.all
    render json: all_tasks
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task
    else
      render json: { error: task.errors.messages }, status: 422
    end
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def update
    task = Task.find(params[:id])
    if task.update(task_params)
      render json: task
    else
      render json: { error: task.errors.messages }, status: 422
    end
  end

  def destroy
    task = Task.find(params[:id])
    if task.destroy
      head :ok
    else
      render json: { error: task.errors.messages }, status: 422
    end
  end

  private

  def task_params
    params.permit(:description, :done)
  end
end