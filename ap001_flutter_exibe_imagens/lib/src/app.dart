import 'package:flutter/material.dart';

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Minhas imagens'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            print('Estou agora no app dart!');
          },
          child: const Icon(Icons.add)
        ),
      ),
    );
  }
}