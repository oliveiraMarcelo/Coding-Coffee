import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProgressBar from '../assets/progressbar.svg';
import {
  MissedClass, ContentHeader, Content, LastUpdates, MyClasses, ContentBody, Button,
} from '../styles/pages/profile';
import NavbarPanel from './_navbar_panel';
import SideMenu from './_side_menu';

export default function Profile() {
  function createData(name, calories, fat, carbs, protein, last = null) {
    return {
      name, calories, fat, carbs, protein, last,
    };
  }

  const rowsLastUpdates = [
    createData('Lista de exercicio 3', 'A', 'Computação Básica', 'Eng. de Software', '20/04/2020'),
    createData('Lista de exercicio 2', 'A', 'Computação Básica', 'Eng. de Software', '20/04/2020'),
  ];

  const rowsMyClass = [
    createData(1, 'Computação Básica', 'João da Silva', '11111'),
    createData(2, 'Computação Básica', 'João da Silva', '11111'),
  ];

  return (
    <>
      <style jsx global>
        {`
        html,body {
          background-image: none !important;
        }
      `}

      </style>
      <NavbarPanel />
      <Content>
        <SideMenu />
        <ContentBody>
          <ContentHeader>
            <MissedClass>
              <h2>Faltas</h2>
              <div>
                Sistema de banco de dados
                <ProgressBar />
              </div>
              <div>
                Computação Básica
                <ProgressBar />
              </div>
              <div>
                Estrutura de dados e Algoritmos
                <ProgressBar />
              </div>
              <div>
                Orientação a Objetos
                <ProgressBar />
              </div>
            </MissedClass>
            <LastUpdates>
              <h2>Últimas Atualizações</h2>
              <TableContainer component={Paper}>
                <Table aria-label="caption table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Atualização</TableCell>
                      <TableCell align="right">Turma</TableCell>
                      <TableCell align="right">Disciplina</TableCell>
                      <TableCell align="right">Curso</TableCell>
                      <TableCell align="right">Data</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowsLastUpdates.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </LastUpdates>
          </ContentHeader>
          <MyClasses>
            <h2>Minhas Turmas</h2>
            <TableContainer component={Paper}>
              <Table aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="center">Disciplinas</TableCell>
                    <TableCell align="center">Professor</TableCell>
                    <TableCell align="center">Código</TableCell>
                    <TableCell align="center">Atividades</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsMyClass.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                      <TableCell align="center">{row.carbs}</TableCell>
                      <TableCell align="center">
                        <Button>
                          <span>Conteúdos e Informações</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </MyClasses>
        </ContentBody>
      </Content>
    </>
  );
}
