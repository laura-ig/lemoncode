import * as React from 'react';
import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('pods/project/project.mapper specs', () => {
  it('should return project without optional props', () => {
    // Arrange
    const project:apiModel.Project = {
      id: 'P1',
      name: 'Project 1',
      isActive: true,
      employees: []
    };
    const expected: viewModel.Project = {
      id: 'P1',
      name: 'Project 1',
      isActive: true,
      employees: []
    };

    // Act
    const result: viewModel.EmployeeSummary = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expected);
    expect(result.employees).toHaveLength(0);
    expect(result.comments).toBeFalsy();
    expect(result.externalId).toBeFalsy();
  });

  it('should return project with only one employee', () => {
    // Arrange
    const employee:apiModel.EmployeeSummary = {
      id: '1',
      isAssigned: true,
      employeeName: "John",
    };
    const project:apiModel.Project = {
      id: 'P1',
      name: 'Project 1',
      isActive: true,
      employees: [
        employee
      ]
    };

    // Act
    const result: viewModel.EmployeeSummary = mapProjectFromApiToVm(project);

    // Assert
    expect(result.employees).toHaveLength(1);
  });

  it('should return empty employee array when it feeds null', () => {
    // Arrange
    const project:apiModel.Project = {
      id: 'P1',
      name: 'Project 1',
      isActive: true,
      employees: null
    };
    const expected: viewModel.Project = {
      id: 'P1',
      name: 'Project 1',
      isActive: true,
      employees: [],
    };

    // Act
    const result: viewModel.EmployeeSummary = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expected);
    expect(result.employees).toHaveLength(0);
    expect(result.comments).toBeFalsy();
    expect(result.externalId).toBeFalsy();
  });

  it.each<apiModel.EmployeeSummary[]>([undefined, null, {}, []])(
    'should return empty props project and empty employees array when it feeds %p',
    (input: any) => {
      // Arrange

      // Act
      const result: viewModel.EmployeeSummary[] = mapProjectFromApiToVm(input);

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    }
  );

  it.each<apiModel.EmployeeSummary[]>([undefined, null, {}, []])(
    'should return empty employees array when it feeds %p project data',
    (input: any) => {
      // Arrange

      // Act
      const result: viewModel.EmployeeSummary[] = mapProjectFromApiToVm(input);

      // Assert
      expect(result.employees).toEqual([]);
      expect(result.employees).toHaveLength(0);
    }
  );
})
