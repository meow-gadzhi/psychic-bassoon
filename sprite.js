// Тут хранятся иконки в SVG
var icon = '
<svg style="display:none;">\
  <defs>\
  <symbol id="tw" viewBox="0 0 474.006 474.006">
  <g>
    <circle cx="237.003" cy="237.003" r="237.003" />
    <path d="M404.567,69.421c92.545,92.541,92.552,242.59-0.004,335.142
c-92.545,92.549-242.601,92.549-335.142,0.007L404.567,69.421z" />
    <path d="M471.821,268.565l-64.048-64.048l-5.28,5.276l-80.684-80.68l-4.183,4.18l-9.684-9.684l-11.831,11.831
l-9.586-9.583l-15.42,15.416l18.817,18.814l-72.257,72.265l-70.42-70.412l-15.416,15.412l20.295,20.292l-14.282,14.279l23.3,23.3
l-10.271,10.271l28.385,28.389l-4.632,4.636l26.054,26.058l-30.604,30.608l-22.799-22.795l-22.02,22.02l-27.322-27.326l-5.493,5.497
l160.787,160.787C365.993,465.726,457.071,379.242,471.821,268.565z" />
    <path class="fon" style="fill:#445161;" d="M370.487,226.792c18.941-1.56,31.783-10.174,36.729-21.856c-6.836,4.198-28.044,8.774-39.756,4.412
c-0.572-2.746-1.212-5.366-1.841-7.719c-8.924-32.774-39.479-59.168-71.494-55.984c2.589-1.044,5.224-2.021,7.839-2.892
c3.521-1.265,24.198-4.632,20.946-11.929c-2.746-6.417-28.007,4.853-32.763,6.327c6.279-2.361,16.662-6.425,17.77-13.639
c-9.62,1.317-19.061,5.867-26.353,12.483c2.63-2.84,4.629-6.294,5.055-10.013c-25.665,16.389-40.654,49.432-52.778,81.488
c-9.523-9.227-17.964-16.497-25.541-20.531c-21.242-11.397-46.641-23.285-86.513-38.084c-1.224,13.19,6.522,30.735,28.845,42.398
c-4.838-0.647-13.672,0.801-20.756,2.492c2.885,15.113,12.288,27.562,37.773,33.586c-11.644,0.767-17.661,3.416-23.113,9.126
c5.295,10.511,18.237,22.881,41.504,20.34c-25.867,11.15-10.541,31.812,10.514,28.729c-35.921,37.103-92.556,34.379-125.076,3.349
c84.908,115.699,269.485,68.422,296.98-43.019c20.61,0.172,32.725-7.139,40.235-15.199
C396.817,232.674,379.609,230.593,370.487,226.792z" />
  </g>
</symbol>
<symbol id="fb" viewBox="0 0 291.319 291.319">
  <g>
    <path d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z" />
    <path style="fill:#445161;" d="M163.394,100.277h18.772v-27.73h-22.067v0.1c-26.738,0.947-32.218,15.977-32.701,31.763h-0.055
v13.847h-18.207v27.156h18.207v72.793h27.439v-72.793h22.477l4.342-27.156h-26.81v-8.366
C154.791,104.556,158.341,100.277,163.394,100.277z" />
  </g>
</symbol>
<symbol id="in" viewBox="0 0 291.319 291.319">
  <g>
    <path d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
S65.21,0,145.659,0z" />
    <path style="fill:#445161;" d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z" />
  </g>
</symbol>
<symbol id="google" viewBox="0 0 23.952 23.952">
  <g>
    <path style="fill:white;" d="M18.174,1.157h-2.116l0.709,0.576c0.282,0.234,0.547,0.524,0.802,0.871
c0.252,0.346,0.468,0.749,0.646,1.205c0.176,0.457,0.266,0.979,0.266,1.566c0,0.562-0.083,1.064-0.252,1.5
c-0.165,0.438-0.381,0.832-0.643,1.183S17.018,8.723,16.674,9l-1.06,0.811c-0.218,0.216-0.431,0.439-0.645,0.674
c-0.21,0.231-0.317,0.527-0.317,0.884c0,0.351,0.125,0.633,0.372,0.84c0.251,0.21,0.479,0.376,0.682,0.504l1.223,0.885
c0.337,0.29,0.653,0.582,0.957,0.878c0.302,0.295,0.574,0.614,0.815,0.957c0.236,0.345,0.427,0.723,0.561,1.136
c0.135,0.413,0.199,0.888,0.199,1.426c0,0.75-0.182,1.481-0.551,2.188c-0.368,0.709-0.912,1.346-1.638,1.909
c-0.724,0.564-1.621,1.015-2.691,1.353c-1.073,0.338-2.306,0.507-3.707,0.507c-1.232,0-2.302-0.125-3.207-0.378
c-0.908-0.252-1.666-0.587-2.271-1.006c-0.605-0.418-1.057-0.895-1.353-1.432c-0.295-0.537-0.44-1.1-0.44-1.691
c0-0.569,0.182-1.212,0.551-1.933c0.368-0.719,1.042-1.353,2.023-1.899c0.52-0.29,1.076-0.524,1.67-0.709
c0.592-0.183,1.176-0.324,1.758-0.427c0.582-0.101,1.133-0.173,1.655-0.217c0.52-0.042,0.971-0.075,1.343-0.097
c-0.231-0.287-0.448-0.592-0.648-0.909c-0.195-0.316-0.294-0.726-0.294-1.231c0-0.268,0.033-0.49,0.099-0.669
c0.065-0.181,0.137-0.362,0.221-0.543c-0.169,0.021-0.344,0.037-0.527,0.047c-0.186,0.011-0.368,0.018-0.543,0.018
c-0.906,0-1.704-0.141-2.398-0.429C7.822,10.164,7.228,9.79,6.743,9.33C6.26,8.868,5.895,8.34,5.655,7.743
C5.41,7.148,5.29,6.544,5.29,5.931c0-0.728,0.179-1.463,0.525-2.209c0.352-0.748,0.882-1.414,1.594-2.004
c0.978-0.75,1.993-1.224,3.051-1.421C11.515,0.1,12.499,0,13.415,0h6.935L18.174,1.157z M17.354,19.195
c0-0.389-0.064-0.744-0.196-1.069c-0.131-0.321-0.327-0.633-0.592-0.934c-0.265-0.301-0.639-0.619-1.121-0.955
c-0.483-0.337-1.03-0.719-1.646-1.149c-0.127-0.043-0.247-0.067-0.354-0.067H13.03c-0.086,0-0.248,0.007-0.489,0.016
c-0.241,0.011-0.53,0.035-0.868,0.071c-0.337,0.038-0.697,0.089-1.084,0.152c-0.384,0.065-0.752,0.148-1.104,0.256
c-0.197,0.064-0.452,0.163-0.771,0.296c-0.323,0.131-0.64,0.324-0.956,0.573c-0.317,0.249-0.59,0.568-0.817,0.95
c-0.233,0.383-0.346,0.845-0.346,1.389c0,0.562,0.134,1.072,0.405,1.531c0.271,0.457,0.668,0.86,1.185,1.213
c0.512,0.35,1.135,0.616,1.865,0.795c0.726,0.181,1.538,0.271,2.433,0.271c1.62,0,2.837-0.313,3.65-0.941
S17.354,20.166,17.354,19.195z M14.668,9.079c0.381-0.373,0.615-0.773,0.697-1.2c0.083-0.425,0.124-0.782,0.124-1.067
c0-0.564-0.086-1.179-0.255-1.846c-0.171-0.664-0.43-1.285-0.774-1.859c-0.347-0.576-0.777-1.059-1.289-1.453
c-0.521-0.397-1.115-0.592-1.797-0.592c-0.438,0-0.872,0.099-1.298,0.294C9.65,1.553,9.295,1.802,9.021,2.099
C8.731,2.43,8.539,2.793,8.435,3.185C8.335,3.581,8.284,3.986,8.284,4.4c0,0.521,0.083,1.105,0.244,1.748
c0.164,0.646,0.419,1.247,0.768,1.813c0.35,0.563,0.785,1.039,1.3,1.42c0.52,0.385,1.135,0.576,1.854,0.576
c0.423,0,0.834-0.078,1.232-0.24C14.079,9.557,14.41,9.343,14.668,9.079z" />
  </g>
</symbol>
<symbol id="tube" viewBox="0 0 97.75 97.75">
  <g>
    <polygon points="25.676,52.482 29.551,52.482 29.551,73.455 33.217,73.455 33.217,52.482 37.164,52.482 37.164,49.047
  25.676,49.047 		" />
    <path d="M56.674,55.046c-1.212,0-2.343,0.662-3.406,1.972v-7.972h-3.295v24.409h3.295v-1.762c1.103,1.361,2.233,2.013,3.406,2.013
  c1.311,0,2.193-0.69,2.633-2.044c0.221-0.771,0.334-1.982,0.334-3.665v-7.242c0-1.722-0.113-2.924-0.334-3.655
  C58.868,55.736,57.984,55.046,56.674,55.046z M56.344,68.255c0,1.644-0.482,2.454-1.434,2.454c-0.541,0-1.092-0.259-1.643-0.811
  V58.814c0.551-0.545,1.102-0.803,1.643-0.803c0.951,0,1.434,0.842,1.434,2.482V68.255z" />
    <path d="M43.824,69.167c-0.731,1.033-1.422,1.542-2.084,1.542c-0.44,0-0.691-0.259-0.771-0.771c-0.03-0.106-0.03-0.508-0.03-1.28
  v-13.39h-3.296v14.379c0,1.285,0.111,2.153,0.291,2.705c0.331,0.922,1.063,1.354,2.123,1.354c1.213,0,2.457-0.732,3.767-2.234
  v1.984h3.298V55.268h-3.298V69.167z" />
    <path d="M46.653,38.466c1.073,0,1.588-0.851,1.588-2.551v-7.731c0-1.701-0.515-2.548-1.588-2.548c-1.074,0-1.59,0.848-1.59,2.548
  v7.731C45.063,37.616,45.579,38.466,46.653,38.466z" />
    <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
   M54.311,22.86h3.321v13.532c0,0.781,0,1.186,0.04,1.295c0.073,0.516,0.335,0.78,0.781,0.78c0.666,0,1.365-0.516,2.104-1.559
  V22.86h3.33v18.379h-3.33v-2.004c-1.326,1.52-2.59,2.257-3.805,2.257c-1.072,0-1.812-0.435-2.146-1.365
  c-0.184-0.557-0.295-1.436-0.295-2.733V22.86L54.311,22.86z M41.733,28.853c0-1.965,0.334-3.401,1.042-4.33
  c0.921-1.257,2.218-1.885,3.878-1.885c1.668,0,2.964,0.628,3.885,1.885c0.698,0.928,1.032,2.365,1.032,4.33v6.436
  c0,1.954-0.334,3.403-1.032,4.322c-0.921,1.254-2.217,1.881-3.885,1.881c-1.66,0-2.957-0.627-3.878-1.881
  c-0.708-0.919-1.042-2.369-1.042-4.322V28.853z M32.827,16.576l2.622,9.685l2.519-9.685h3.735L37.26,31.251v9.989h-3.692v-9.989
  c-0.335-1.77-1.074-4.363-2.259-7.803c-0.778-2.289-1.589-4.585-2.367-6.872H32.827z M75.186,75.061
  c-0.668,2.899-3.039,5.039-5.894,5.358c-6.763,0.755-13.604,0.759-20.42,0.755c-6.813,0.004-13.658,0-20.419-0.755
  c-2.855-0.319-5.227-2.458-5.893-5.358c-0.951-4.129-0.951-8.638-0.951-12.89s0.012-8.76,0.962-12.89
  c0.667-2.9,3.037-5.04,5.892-5.358c6.762-0.755,13.606-0.759,20.421-0.755c6.813-0.004,13.657,0,20.419,0.755
  c2.855,0.319,5.227,2.458,5.896,5.358c0.948,4.13,0.942,8.638,0.942,12.89S76.137,70.932,75.186,75.061z" />
    <path d="M67.17,55.046c-1.686,0-2.995,0.619-3.947,1.864c-0.699,0.92-1.018,2.342-1.018,4.285v6.371
  c0,1.933,0.357,3.365,1.059,4.276c0.951,1.242,2.264,1.863,3.988,1.863c1.721,0,3.072-0.651,3.984-1.972
  c0.4-0.584,0.66-1.245,0.77-1.975c0.031-0.33,0.07-1.061,0.07-2.124v-0.479h-3.361c0,1.32-0.043,2.053-0.072,2.232
  c-0.188,0.881-0.662,1.321-1.473,1.321c-1.132,0-1.686-0.84-1.686-2.522v-3.226h6.592v-3.767c0-1.943-0.329-3.365-1.02-4.285
  C70.135,55.666,68.824,55.046,67.17,55.046z M68.782,62.218h-3.296v-1.683c0-1.682,0.553-2.523,1.654-2.523
  c1.09,0,1.642,0.842,1.642,2.523V62.218z" />
  </g>
</symbol>
<symbol id="skype" viewBox="0 0 291.364 291.364">
  <g>
    <path d="M282.966,176.612c2.094-9.495,3.204-19.309,3.204-29.405c0-75.661-62.197-137.011-138.941-137.011
c-8.093,0-16.032,0.692-23.752,2.003C111.061,4.479,96.367,0,80.618,0C36.101,0,0.032,35.577,0.032,79.475
c0,14.657,4.051,28.385,11.07,40.193c-1.848,8.894-2.813,18.107-2.813,27.539c0,75.688,62.197,134.753,138.932,134.753
c8.694,0,17.197-0.792,25.436-2.294c11.352,6.008,24.316,11.698,38.099,11.698c44.508,0,80.577-35.568,80.577-79.466
C291.333,199.235,288.319,187.245,282.966,176.612z" />
    <path style="fill:#445161;" d="M210.6,203.131c-5.362,7.62-13.21,13.61-23.542,17.916c-10.333,4.342-22.568,6.491-36.724,6.491
c-16.978,0-30.98-2.95-42.023-8.858c-7.811-4.242-14.174-9.923-19.072-17.006c-4.88-7.083-7.328-13.983-7.328-20.693
c0-3.878,1.466-7.21,4.397-9.969c2.931-2.795,6.673-4.169,11.198-4.169c3.678,0,6.8,1.065,9.331,3.241
c2.549,2.158,4.725,5.353,6.509,9.604c2.194,5.053,4.552,9.268,7.11,12.645c2.531,3.377,6.118,6.181,10.724,8.375
c4.625,2.176,10.697,3.286,18.198,3.286c10.324,0,18.717-2.203,25.181-6.637c6.445-4.415,9.686-9.959,9.686-16.578
c0-5.244-1.748-9.532-5.226-12.782c-3.487-3.277-7.984-5.781-13.501-7.501c-5.508-1.739-12.882-3.578-22.131-5.517
c-12.354-2.649-22.705-5.781-31.025-9.331c-8.33-3.578-14.957-8.43-19.837-14.575c-4.898-6.172-7.338-13.819-7.338-22.95
c0-8.721,2.576-16.45,7.747-23.214c5.162-6.773,12.618-11.971,22.413-15.613c9.777-3.641,21.285-5.453,34.494-5.453
c10.56,0,19.7,1.211,27.411,3.605c7.711,2.422,14.093,5.626,19.172,9.623c5.089,3.997,8.812,8.184,11.152,12.581
c2.349,4.37,3.523,8.685,3.523,12.836c0,3.814-1.457,7.274-4.388,10.324c-2.931,3.059-6.591,4.597-10.97,4.597
c-3.997,0-7.028-0.929-9.104-2.758c-2.076-1.839-4.324-4.843-6.737-9.022c-3.141-5.972-6.882-10.633-11.27-13.974
c-4.388-3.35-11.416-5.025-21.121-5.025c-8.985,0-16.25,1.803-21.767,5.453c-5.517,3.623-8.284,8.011-8.284,13.118
c0,3.15,0.956,5.899,2.822,8.202c1.866,2.321,4.452,4.279,7.756,5.927c3.268,1.657,6.6,2.95,9.959,3.905
c3.359,0.938,8.922,2.294,16.678,4.097c9.686,2.085,18.471,4.397,26.337,6.91c7.857,2.522,14.557,5.59,20.074,9.167
c5.508,3.605,9.823,8.175,12.909,13.692c3.086,5.499,4.643,12.244,4.643,20.238C218.639,186.899,215.945,195.502,210.6,203.131z" />
  </g>
</symbol>
<symbol id="icq" viewBox="0 0 16.683 16.683">
  <g>
    <path d="M14.973,8.04c-0.408-0.156-0.963-0.254-1.554-0.281c1.058-0.447,1.649-1.448,1.32-2.235
c-0.331-0.79-1.465-1.07-2.528-0.626c-0.272,0.113-0.59,0.297-0.906,0.52c0.524-0.56,0.951-1.191,1.149-1.71
c0.528-1.373-0.16-2.919-1.533-3.447C9.548-0.266,8,0.423,7.474,1.796c-0.106,0.271-0.183,0.611-0.231,0.98
C6.753,1.875,5.85,1.397,5.124,1.7c-0.79,0.33-1.07,1.466-0.625,2.528c0.03,0.071,0.066,0.148,0.104,0.224
c-0.34-0.241-0.679-0.435-0.978-0.551c-1.374-0.528-2.92,0.161-3.447,1.534C-0.35,6.81,0.339,8.355,1.712,8.883
C2.016,8.999,2.403,9.081,2.825,9.13c-1.04,0.453-1.618,1.441-1.292,2.222c0.33,0.79,1.465,1.071,2.528,0.626
c0.018-0.008,0.036-0.017,0.055-0.025c-0.258,0.355-0.462,0.709-0.583,1.02c-0.527,1.375,0.161,2.921,1.534,3.449
c1.373,0.526,2.919-0.162,3.447-1.534c0.173-0.448,0.273-1.072,0.287-1.729c0.033,0.101,0.067,0.196,0.103,0.281
c0.444,1.064,1.449,1.66,2.239,1.329c0.79-0.33,1.07-1.464,0.626-2.527c-0.002-0.004-0.003-0.008-0.006-0.012
c0.443,0.358,0.902,0.642,1.296,0.793c1.373,0.526,2.921-0.161,3.449-1.534C17.032,10.115,16.345,8.569,14.973,8.04z M12.365,5.264
c0.79-0.33,1.634-0.121,1.88,0.465c0.246,0.588-0.198,1.335-0.989,1.667c-0.579,0.242-1.806,0.453-2.517,0.316
c-0.031-0.105-0.065-0.209-0.112-0.312c-0.081-0.181-0.183-0.347-0.299-0.499C10.696,6.289,11.763,5.516,12.365,5.264z
 M8.111,2.041c0.393-1.021,1.543-1.534,2.565-1.142c1.021,0.393,1.533,1.542,1.142,2.564c-0.326,0.847-1.565,2.364-2.562,2.634
C8.997,5.996,8.72,5.943,8.438,5.933C7.675,5.244,7.754,2.971,8.111,2.041z M5.33,2.195C5.919,1.95,6.666,2.393,6.997,3.184
C7.064,3.345,7.128,3.555,7.184,3.79c0.008,0.472,0.064,0.947,0.174,1.379c0,0.515-0.092,0.942-0.344,1.047
c-0.588,0.246-1.817-1.35-2.148-2.141C4.534,3.284,4.743,2.441,5.33,2.195z M1.957,8.244C0.935,7.853,0.423,6.702,0.816,5.68
c0.392-1.021,1.542-1.534,2.563-1.141c0.992,0.38,2.894,2.008,2.653,3.039C6.016,7.624,6,7.67,5.986,7.717
C5.534,8.692,2.964,8.631,1.957,8.244z M7.877,14.642c-0.392,1.021-1.543,1.533-2.565,1.141c-1.021-0.392-1.534-1.543-1.142-2.564
c0.368-0.958,1.905-2.776,2.937-2.676c0.14,0.083,0.288,0.15,0.439,0.203C8.312,11.434,8.235,13.708,7.877,14.642z M6.644,9.174
C6.223,8.226,6.649,7.111,7.598,6.691c0.949-0.423,2.063,0.004,2.485,0.954c0.407,0.917,0.015,1.985-0.871,2.436H9.21
c-0.005,0.002-0.009,0.007-0.015,0.01c-0.023,0.011-0.043,0.027-0.067,0.038C8.181,10.551,7.066,10.122,6.644,9.174z
 M10.936,14.277c-0.587,0.244-1.333-0.199-1.665-0.991c-0.237-0.567-0.445-1.754-0.326-2.47c0.145-0.034,0.287-0.081,0.427-0.142
c0.168-0.075,0.321-0.166,0.463-0.271c0.601,0.403,1.325,1.412,1.567,1.992C11.733,13.186,11.524,14.029,10.936,14.277z
 M15.868,11.243c-0.393,1.021-1.542,1.534-2.564,1.143c-0.986-0.38-2.877-1.995-2.655-3.026c0.026-0.063,0.05-0.126,0.07-0.19
c0.5-0.936,3.015-0.872,4.009-0.491C15.748,9.07,16.261,10.223,15.868,11.243z" />
  </g>
</symbol>
<symbol id="mail" viewBox="0 0 512 512">
  <g>
    <path d="M226.735,1.636C111.259,14.518,17.472,106.202,2.285,221.396c-21.518,163.24,111.938,302.116,273.589,289.849
  c59.464-4.513,115.124-31.086,158.736-71.759l3.746-3.492c4.309-4.018,4.544-10.768,0.526-15.076l-14.555-15.607
  c-4.018-4.309-10.767-4.544-15.076-0.526l-7.803,7.277c-48.51,45.232-115.104,65.582-182.284,54.141
  c-95.215-16.216-168.411-97.052-175.846-193.352C33.487,145.508,136.207,39.093,262.324,42.758
  c116.288,3.381,207.009,102.616,207.009,218.953v15.622c0,24.934-21.486,44.932-46.921,42.46
  C400.246,317.637,384,297.714,384,275.442v-94.108c0-5.892-4.776-10.667-10.667-10.667H352c-4.283,0-7.921,2.56-9.618,6.203
  c-21.465-23.413-52.19-38.203-86.382-38.203c-64.698,0-117.333,52.635-117.333,117.333S191.302,373.334,256,373.334
  c40.755,0,76.691-20.909,97.732-52.54c15.842,26.475,45.276,43.922,78.78,41.677c45.303-3.035,79.488-42.746,79.488-88.15V256
  C512,105.202,380.931-15.566,226.735,1.636z M256,330.667c-41.167,0-74.667-33.5-74.667-74.667
  c0-41.167,33.5-74.667,74.667-74.667c41.167,0,74.667,33.5,74.667,74.667C330.667,297.167,297.167,330.667,256,330.667z" />
  </g>
</symbol>
<symbol id="phone" viewBox="0 0 511.999 511.999">
  <g>
    <path d="M498.827,377.633l-63.649-63.649c-17.548-17.547-46.102-17.547-63.649,0l-28.931,28.931
  c-13.294,13.294-34.926,13.29-48.215,0.005l-125.4-125.507c-13.325-13.325-13.327-34.892,0-48.219
  c4.66-4.66,18.041-18.041,28.931-28.931c17.471-17.47,17.715-45.935-0.017-63.665l-63.632-63.432
  C116.717-4.381,88.164-4.381,70.663,13.12C57.567,26.102,53.343,30.29,47.471,36.111c-63.28,63.279-63.28,166.242-0.003,229.519
  l198.692,198.796c63.428,63.429,166.088,63.434,229.521,0l23.146-23.145C516.375,423.733,516.375,395.181,498.827,377.633z
   M91.833,34.382c5.849-5.849,15.365-5.85,21.233,0.016l63.632,63.432c5.863,5.863,5.863,15.352,0,21.216l-10.609,10.608
  l-84.81-84.81L91.833,34.382z M267.38,443.213L68.687,244.415c-48.958-48.958-51.649-125.833-8.276-178.006l84.564,84.564
  c-22.22,25.189-21.294,63.572,2.787,87.653l125.396,125.501c0.001,0.001,0.003,0.003,0.004,0.004
  c24.055,24.056,62.436,25.042,87.656,2.792l84.566,84.566C393.377,494.787,316.675,492.508,267.38,443.213z M477.612,420.065
  l-10.609,10.609l-84.865-84.866l10.607-10.608c5.85-5.849,15.367-5.85,21.217,0l63.649,63.649
  C483.461,404.699,483.461,414.217,477.612,420.065z" />
  </g>
</symbol>\
  </defs>\
</svg>';    
// Вставляем иконки в HTML        
document.getElementById('svg-icon-placeholder').innerHTML = icon;